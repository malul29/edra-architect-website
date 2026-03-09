# EDRA Arsitek Indonesia — Deployment Guide 🚀

> Panduan dari development hingga production deployment

---

## Status Saat Ini

### ✅ Selesai
- [x] Frontend Next.js 15 (App Router)
- [x] Backend Express API + JSON storage
- [x] Semua halaman diimplementasi
- [x] Admin dashboard + CMS (TipTap editor)
- [x] Intro animation (GSAP)
- [x] Responsive design
- [x] API caching (frontend + backend)
- [x] Push ke GitHub: https://github.com/malul29/edra-architect-website

### 🔄 Selanjutnya
- [ ] Isi konten (projects, blogs)
- [ ] Testing menyeluruh
- [ ] Deploy ke staging (Vercel + Railway)
- [ ] Domain setup
- [ ] Production launch

---

## Development vs Production

### 🔧 Development (Sekarang)
```
Frontend : http://localhost:3000  (Next.js dev server)
Backend  : http://localhost:5000  (Express)
Database : JSON files lokal
```

### 🚀 Production (Target)
```
Frontend : https://www.edra-arsitek.com  (Vercel)
Backend  : https://edra-api.up.railway.app  (Railway)
Database : PostgreSQL
```

### 🚀 Production (Hostinger VPS)
```
App      : Next.js + Payload (single app di folder client)
Server   : Hostinger VPS (Ubuntu)
Process  : PM2
Proxy    : Nginx (domain -> localhost:3000)
Database : PostgreSQL (Neon / managed DB)
```

### ⚠️ Jika Hanya Pakai Hostinger Business Web Hosting (Bukan VPS)
```
Node.js server jangka panjang: TIDAK tersedia
PM2 / akses root / custom daemon: TIDAK tersedia
Deploy Next.js + Payload fullstack: TIDAK bisa langsung di-hosting ini
```

Artinya: untuk project ini, **Hostinger Business sebaiknya dipakai untuk domain + DNS saja**, sedangkan aplikasi tetap dijalankan di platform Node (Vercel/Railway/Render).

---

## Platform Hosting

### Frontend — Vercel ⭐ Recommended
- Gratis untuk Next.js projects
- Auto-deploy dari GitHub (push = auto deploy)
- HTTPS + CDN otomatis
- Preview URL untuk setiap branch

### Backend — Railway
- $5/month credit gratis
- Node.js auto-detected
- PostgreSQL tersedia
- Auto-deploy dari GitHub

### Alternatif — Full di Hostinger VPS
- Cocok jika ingin satu server untuk app + reverse proxy
- Kontrol penuh environment production
- Tidak tergantung Vercel/Railway

### Hostinger Business (Shared Hosting) — yang realistis
- Bisa: domain management, DNS, email hosting, file statis/PHP
- Tidak bisa: menjalankan Next.js + Payload server production 24/7
- Rekomendasi: arahkan domain Hostinger ke Vercel (frontend) + Railway/Render (backend)

---

## Skema Deploy Jika Anda Hanya Punya Hostinger Business

### Opsi A (Paling aman, tanpa ubah arsitektur)
1. Deploy app `client` ke Vercel (Node runtime untuk Next.js).
2. Deploy backend/API ke Railway/Render (jika masih dipakai terpisah).
3. Di panel DNS Hostinger, arahkan domain ke Vercel:
  ```
  Type    Name    Value
  A       @       76.76.21.21
  CNAME   www     cname.vercel-dns.com
  ```
4. Keep email tetap di Hostinger (jangan ubah MX records).

### Opsi B (Hostinger-only) — butuh refactor besar
- Konversi website jadi static export murni (`next export`) tanpa Payload server/admin.
- Semua fitur CMS, auth admin, API server-side akan hilang atau harus dipindah ke layanan eksternal.
- Opsi ini **tidak direkomendasikan** untuk struktur project saat ini.

---

## Hostinger VPS Deployment (Recommended untuk stack saat ini)

### 1. Persiapan Server

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx git
sudo npm install -g pm2
```

### 2. Pull Project

```bash
cd /var/www
sudo git clone https://github.com/malul29/edra-architect-website.git web-edra
sudo chown -R $USER:$USER /var/www/web-edra
cd /var/www/web-edra/client
```

### 3. Environment Production

```bash
cp .env.example .env
nano .env
```

Isi `.env` minimal:
```
PAYLOAD_SECRET=isi-secret-production-yang-kuat
DATABASE_URL=postgresql://... (production database)
```

### 4. Install & Build

```bash
npm ci
npm run build
```

### 5. Jalankan Dengan PM2

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

### 6. Nginx Reverse Proxy

Buat file `/etc/nginx/sites-available/edra`:

```nginx
server {
  listen 80;
  server_name edra-arsitek.com www.edra-arsitek.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Aktifkan:

```bash
sudo ln -s /etc/nginx/sites-available/edra /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. SSL (HTTPS)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d edra-arsitek.com -d www.edra-arsitek.com
```

### 8. Update Deploy (setiap ada commit baru)

```bash
cd /var/www/web-edra
git pull
cd client
npm ci
npm run build
pm2 restart edra-client
```

---

## Step-by-Step Deployment

### PHASE 1 — Deploy Backend ke Railway

1. Buka [railway.app](https://railway.app) → login GitHub
2. **New Project** → **Deploy from GitHub repo**
3. Pilih `edra-architect-website` → pilih folder `server`
4. Tambah environment variables:
   ```
   NODE_ENV=production
   PORT=5000
   ```
5. Klik Deploy

**Hasil:**
```
API URL: https://edra-api.up.railway.app
```

---

### PHASE 2 — Deploy Frontend ke Vercel

1. Buka [vercel.com](https://vercel.com) → login GitHub
2. **New Project** → Import `edra-architect-website`
3. Konfigurasi:
   ```
   Framework Preset : Next.js
   Root Directory   : client
   Build Command    : npm run build
   Output Directory : .next
   ```
4. Tambah environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://edra-api.up.railway.app
   ```
5. Update `next.config.mjs` untuk production:
   ```javascript
   rewrites: async () => [{
     source: '/api/:path*',
     destination: 'https://edra-api.up.railway.app/api/:path*'
   }]
   ```
6. Klik Deploy

**Hasil:**
```
Website: https://edra-architect-website.vercel.app
```

---

### PHASE 3 — Domain Setup

#### Beli Domain
| Registrar | Harga | Link |
|---|---|---|
| Niagahoster (ID) | ~Rp 150k/tahun | niagahoster.co.id |
| Namecheap | ~$10/tahun | namecheap.com |

**Saran domain:**
```
edra-arsitek.com        ← recommended
edraarchitect.id
edra-architects.id
```

#### DNS Configuration (di Vercel)
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

*Propagasi DNS: 1–48 jam*

---

### PHASE 4 — Post Launch

#### SEO
Edit `app/layout.jsx`:
```javascript
export const metadata = {
  title: 'EDRA Arsitek Indonesia',
  description: 'Jasa arsitektur, desain interior, dan konstruksi profesional. Jakarta, Indonesia.',
  openGraph: {
    title: 'EDRA Arsitek Indonesia',
    description: '...',
    url: 'https://www.edra-arsitek.com',
    images: ['/og-image.jpg'],
  },
};
```

#### sitemap.xml — `client/public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.edra-arsitek.com/</loc><priority>1.0</priority></url>
  <url><loc>https://www.edra-arsitek.com/projects</loc><priority>0.8</priority></url>
  <url><loc>https://www.edra-arsitek.com/blogs</loc><priority>0.8</priority></url>
  <url><loc>https://www.edra-arsitek.com/about</loc><priority>0.7</priority></url>
  <url><loc>https://www.edra-arsitek.com/contact</loc><priority>0.6</priority></url>
</urlset>
```

#### robots.txt — `client/public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://www.edra-arsitek.com/sitemap.xml
```

---

## Estimasi Biaya

| Tier | Komponen | Biaya/bulan |
|---|---|---|
| **Gratis** | GitHub + Vercel + Railway credit | Rp 0 |
| **Minimal** | + Domain | ~Rp 12.500 |
| **Professional** | + Vercel Pro + Railway Pro + DB | ~Rp 1.050.000 |

---

## Troubleshooting

### "Cannot connect to API"
Cek CORS di `server/index.js`:
```javascript
app.use(cors({
  origin: 'https://www.edra-arsitek.com',
  credentials: true
}));
```

### "404 pada refresh halaman"
Next.js App Router handle ini secara otomatis — tidak perlu konfigurasi tambahan.

### "Images tidak muncul"
Pastikan domain gambar ada di `next.config.mjs`:
```javascript
images: {
  remotePatterns: [{ protocol: 'https', hostname: '**' }]
}
```

### "Data tidak update setelah edit di admin"
Cache frontend di-invalidate otomatis saat POST/PUT/DELETE.
Jika masih stale: refresh browser (Ctrl+Shift+R).

---

## Workflow Git

```powershell
# Development
git add .
git commit -m "feat: deskripsi perubahan"
git push origin main   # auto-trigger Vercel deploy

# Feature branch
git checkout -b feature/nama-fitur
git push origin feature/nama-fitur
# → Vercel buat preview URL otomatis
```

---

## Local Development

```powershell
# Clone repo
git clone https://github.com/malul29/edra-architect-website.git
cd edra-architect-website

# Install dependencies
cd client && npm install
cd ../server && npm install

# Jalankan
# Terminal 1 — Frontend
cd client && npm run dev     # http://localhost:3000

# Terminal 2 — Backend
cd server && npm run dev     # http://localhost:5000
```
