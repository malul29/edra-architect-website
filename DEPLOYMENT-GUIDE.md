# EDRA Arsitek Indonesia - Deployment Guide 🚀

> Complete guide from development to production deployment

---

## 📋 Table of Contents

1. [Development vs Production](#development-vs-production)
2. [Current Status](#current-status)
3. [Production Roadmap](#production-roadmap)
4. [Platform Hosting](#platform-hosting)
5. [Step-by-Step Deployment](#step-by-step-deployment)
6. [Domain & DNS Setup](#domain--dns-setup)
7. [Post-Launch Checklist](#post-launch-checklist)
8. [Cost Estimation](#cost-estimation)
9. [Troubleshooting](#troubleshooting)

---

## Development vs Production

### 🔧 DEVELOPMENT (Current Stage)

**What is it:**
- Process of **building and testing** the website
- Runs on **local computer** (localhost or local IP)
- Only developers/team can access

**Characteristics:**
```
✅ Fast reload/hot module replacement
✅ Source maps for debugging
✅ Mock/dummy data
✅ Detailed error messages
✅ No optimization
✅ Testing new features

URL: http://localhost:5173 or http://192.168.x.x:5173
Database: Local JSON files (portfolio.json, blogs.json)
```

**Not Required in Development:**
```
❌ Google Analytics (no real visitors)
❌ Cookie consent (not public)
❌ HTTPS/SSL certificate
❌ CDN
❌ Performance optimization
❌ SEO optimization
```

---

### 🚀 PRODUCTION (Future Stage)

**What is it:**
- Website **live and online** on the internet
- Runs on **hosting server** (Vercel, Netlify, AWS, etc.)
- **Anyone** can access from anywhere

**Characteristics:**
```
✅ Optimized/minified code
✅ Fast loading
✅ Real database/API
✅ Monitoring & error tracking
✅ Security (HTTPS, rate limiting)
✅ Backup & recovery
✅ SEO ready

URL: https://www.edra-arsitek.com
Database: PostgreSQL or MongoDB
```

**Required in Production:**
```
✅ HTTPS/SSL certificate (security)
✅ Domain name (branding)
✅ Analytics (track visitors)
✅ Error monitoring (Sentry, LogRocket)
✅ Backup system
✅ Working contact form
✅ Performance optimization
```

---

## Current Status

### ✅ Completed
- [x] Frontend development (React + Vite)
- [x] Backend API (Express + JSON storage)
- [x] All pages implemented
- [x] Admin dashboard with CMS
- [x] Responsive design
- [x] Page transitions
- [x] Rich text editor for articles
- [x] Network access configured

### 🔄 In Progress
- [ ] Content population
- [ ] Final testing
- [ ] Bug fixes

### 📅 Upcoming
- [ ] GitHub repository setup
- [ ] Staging deployment
- [ ] Database migration
- [ ] Production launch

---

## Production Roadmap

### Timeline: 4-6 Weeks

```
WEEK 1-2: DEVELOPMENT COMPLETION
├─ Finalize all features
├─ Add all content (projects, blogs)
├─ Thorough testing
├─ Mobile responsiveness check
└─ Bug fixes

WEEK 3: STAGING DEPLOYMENT
├─ Setup GitHub repository
├─ Deploy backend to Railway
├─ Deploy frontend to Vercel
├─ Create staging branch
└─ QA testing

WEEK 4: PRODUCTION PREPARATION
├─ Purchase domain name
├─ Configure DNS
├─ Setup PostgreSQL database
├─ Data migration
└─ Security audit

WEEK 5-6: LAUNCH & OPTIMIZATION
├─ Production deployment
├─ Google Analytics setup
├─ SEO optimization
├─ Submit to search engines
└─ Monitor & fix issues
```

---

## Platform Hosting

### 1️⃣ VERCEL (Frontend) ⭐ RECOMMENDED

**Why Vercel:**
```
✅ FREE for unlimited projects
✅ Auto-deploy from GitHub
✅ Built-in staging (preview deployments)
✅ HTTPS/SSL automatic
✅ CDN global
✅ Perfect for React/Vite
✅ Zero configuration
```

**Features:**
- Every branch = automatic staging URL
- Every commit = preview URL
- Free SSL, CDN, analytics
- 100GB bandwidth/month (free tier)

**URLs:**
```
Production:  https://edra-arsitek.vercel.app
Staging:     https://edra-arsitek-staging.vercel.app
Preview:     https://edra-arsitek-git-[commit].vercel.app

Custom domain:
Production:  https://www.edra-arsitek.com
```

---

### 2️⃣ RAILWAY (Backend)

**Why Railway:**
```
✅ FREE $5/month credit
✅ PostgreSQL included
✅ Auto-deploy from GitHub
✅ Environment variables
✅ Simple UI
```

**Features:**
- Node.js auto-detected
- Database included
- Automatic HTTPS
- Monitoring dashboard

**URLs:**
```
API Production: https://edra-api.up.railway.app
API Staging:    https://edra-api-staging.up.railway.app
```

---

### 3️⃣ NETLIFY (Alternative Frontend)

**Why Netlify:**
```
✅ FREE tier generous
✅ Drag & drop deploy
✅ Branch deploys
✅ Form handling built-in
✅ Edge functions
```

---

## Step-by-Step Deployment

### PHASE 1: PREPARATION (Week 1-2)

#### 1. Finalize Development

**Checklist:**
```
✅ All features complete
✅ Content complete (projects, blogs, services)
✅ Test on localhost
✅ Mobile responsive
✅ Cross-browser testing (Chrome, Firefox, Safari)
✅ Fix all bugs
✅ Performance check
```

#### 2. Setup GitHub Repository

```powershell
# Initialize Git
cd D:\web-edra
git init
git add .
git commit -m "Initial commit - EDRA Arsitek Indonesia"

# Create .gitignore
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore

# Push to GitHub
git branch -M main
git remote add origin https://github.com/[username]/edra-arsitek.git
git push -u origin main
```

#### 3. Create Environment Configuration

**client/.env.development**
```env
VITE_API_URL=http://localhost:5000
```

**client/.env.production**
```env
VITE_API_URL=https://edra-api.up.railway.app
VITE_GTAG_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://www.edra-arsitek.com
```

**server/.env.production**
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:pass@host:5432/edra_db
CORS_ORIGIN=https://www.edra-arsitek.com
```

---

### PHASE 2: STAGING DEPLOYMENT (Week 3)

#### 1. Deploy Backend to Railway

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose `edra-arsitek` repository
6. Select `server` folder as root
7. Add PostgreSQL database (optional for now)
8. Add environment variables:
   ```
   NODE_ENV=production
   PORT=5000
   ```
9. Click "Deploy"

**Result:**
```
API URL: https://edra-api.up.railway.app
```

#### 2. Deploy Frontend to Vercel

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import `edra-arsitek` repository
5. Configure:
   ```
   Framework Preset: Vite
   Root Directory: client
   Build Command: npm run build
   Output Directory: dist
   ```
6. Add environment variables:
   ```
   VITE_API_URL=https://edra-api.up.railway.app
   ```
7. Click "Deploy"

**Result:**
```
Website URL: https://edra-arsitek.vercel.app
```

#### 3. Setup Staging Branch

```powershell
# Create staging branch
git checkout -b staging
git push origin staging
```

**Vercel auto-creates:**
```
Staging URL: https://edra-arsitek-staging.vercel.app
```

---

### PHASE 3: TESTING STAGING (Week 3)

**Testing Checklist:**
```
✅ All pages load correctly
✅ API calls successful
✅ Images load properly
✅ Contact form works
✅ Admin dashboard functional
✅ Mobile responsive
✅ Browser compatibility (Chrome, Firefox, Safari, Edge)
✅ Speed test (Google PageSpeed Insights)
✅ Security headers check
✅ HTTPS working
✅ No console errors
✅ Links working
```

**Testing Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- Chrome DevTools Lighthouse
- [WebPageTest](https://www.webpagetest.org/)

---

### PHASE 4: DOMAIN & PRODUCTION (Week 4)

#### 1. Purchase Domain

**Recommended Registrars:**
- **Niagahoster** (Indonesia) - Rp 150k/year
  - Website: [niagahoster.co.id](https://niagahoster.co.id)
- **Namecheap** (International) - $10/year
  - Website: [namecheap.com](https://namecheap.com)
- **GoDaddy** - $15/year
  - Website: [godaddy.com](https://godaddy.com)

**Suggested Domains:**
```
✨ edra-arsitek.com (RECOMMENDED)
   edra-indonesia.com
   edraarchitect.com
   edra-architects.id
```

#### 2. Configure DNS

**In Vercel Dashboard:**
1. Go to Project Settings → Domains
2. Add domain: `www.edra-arsitek.com`
3. Copy DNS records provided by Vercel

**In Domain Provider (Niagahoster):**
1. Go to Domain Management
2. Select your domain
3. Add DNS records:

```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

**Wait for DNS propagation:** 24-48 hours (usually faster)

#### 3. Enable HTTPS

```
✅ Vercel provides FREE SSL (Let's Encrypt)
✅ Automatic HTTPS redirect
✅ HSTS enabled
✅ Certificate auto-renewal
```

#### 4. Production Deploy

```powershell
# Merge staging to main
git checkout main
git merge staging
git push origin main
```

**Vercel automatically deploys to:**
```
🚀 https://www.edra-arsitek.com
```

---

### PHASE 5: POST-LAUNCH (Week 5-6)

#### 1. Setup Google Analytics

**Get Tracking ID:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account & property
3. Get Measurement ID (G-XXXXXXXXXX)

**Add to website:**

Edit `client/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/edra-logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EDRA Arsitek Indonesia</title>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
  </head>
  <body>
    ...
```

#### 2. SEO Optimization

**Add Meta Tags:**

```html
<head>
  <!-- Basic Meta -->
  <meta name="description" content="PT EDRA Arsitek Indonesia - Professional architecture, interior design, and construction services. Shaping Indonesia's architectural landscape for over 25 years.">
  <meta name="keywords" content="arsitek indonesia, architecture jakarta, interior design, construction services, edra architects">
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="EDRA Arsitek Indonesia">
  <meta property="og:description" content="Professional architecture and interior design services">
  <meta property="og:image" content="https://www.edra-arsitek.com/og-image.jpg">
  <meta property="og:url" content="https://www.edra-arsitek.com">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="EDRA Arsitek Indonesia">
  <meta name="twitter:description" content="Professional architecture and interior design services">
  <meta name="twitter:image" content="https://www.edra-arsitek.com/og-image.jpg">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.edra-arsitek.com">
</head>
```

**Create Sitemap:**

Create `client/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.edra-arsitek.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://www.edra-arsitek.com/projects</loc>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://www.edra-arsitek.com/blogs</loc>
    <priority>0.8</priority>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://www.edra-arsitek.com/about</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.edra-arsitek.com/services</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.edra-arsitek.com/contact</loc>
    <priority>0.6</priority>
  </url>
</urlset>
```

**Create robots.txt:**

Create `client/public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://www.edra-arsitek.com/sitemap.xml
```

#### 3. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `www.edra-arsitek.com`
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://www.edra-arsitek.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

#### 4. Setup Monitoring

**Vercel Analytics:**
- Already included (free)
- Shows visitor traffic, page views

**Google Search Console:**
- SEO performance
- Search queries
- Indexing status

**Optional - Advanced Monitoring:**
- **Sentry** - Error tracking ([sentry.io](https://sentry.io))
- **UptimeRobot** - Downtime monitoring ([uptimerobot.com](https://uptimerobot.com))
- **Hotjar** - User behavior ([hotjar.com](https://hotjar.com))

---

## Domain & DNS Setup

### DNS Records Explained

```
A Record:
- Points domain to IP address
- Example: edra-arsitek.com → 76.76.21.21

CNAME Record:
- Points subdomain to another domain
- Example: www.edra-arsitek.com → cname.vercel-dns.com

TXT Record:
- Used for verification
- Example: Google Site Verification
```

### Complete DNS Configuration

**For Vercel:**
```
Type    Name    Value                       TTL
A       @       76.76.21.21                 3600
CNAME   www     cname.vercel-dns.com        3600
```

**For Email (if using custom email):**
```
Type    Name    Value                       TTL
MX      @       mail.edra-arsitek.com       3600
```

---

## Post-Launch Checklist

### ✅ Technical
- [ ] HTTPS working
- [ ] All pages accessible
- [ ] API endpoints working
- [ ] Images loading
- [ ] Forms submitting
- [ ] Admin dashboard secured
- [ ] 404 page working
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)

### ✅ SEO
- [ ] Meta tags added
- [ ] Sitemap.xml created
- [ ] Robots.txt configured
- [ ] Google Search Console verified
- [ ] Analytics tracking
- [ ] Social media meta tags

### ✅ Content
- [ ] All projects added
- [ ] Blog articles published
- [ ] Contact information correct
- [ ] About page complete
- [ ] Services listed
- [ ] Images optimized

### ✅ Legal
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent (if needed)
- [ ] Copyright notices

### ✅ Marketing
- [ ] Social media accounts created
- [ ] Email signature updated
- [ ] Business cards updated
- [ ] Announce launch

---

## Cost Estimation

### 💰 FREE Tier (Development & Basic Production)

```
GitHub:         FREE
Vercel:         FREE (unlimited projects)
Railway:        FREE ($5/month credit)
Let's Encrypt:  FREE (SSL certificate)
Total:          $0/month
```

### 💰 Minimal Production

```
Domain:         Rp 150,000/year (~Rp 12,500/month)
Vercel:         FREE
Railway:        FREE (with $5 credit)
Total:          ~Rp 12,500/month (~$0.80)
```

### 💰 Professional Production

```
Domain:             Rp 150,000/year
Vercel Pro:         $20/month (team features, analytics++)
Railway Pro:        $20/month (higher limits)
PostgreSQL:         $10/month
Email Service:      $10/month (SendGrid/Mailgun)
Monitoring:         $10/month (Sentry)
Total:              ~$70/month = Rp 1,050,000/month
```

### 💰 Enterprise Scale

```
Domain:             Rp 150,000/year
Vercel Enterprise:  $150/month
AWS/GCP:            $100/month
Database:           $50/month
CDN:                $30/month
Monitoring:         $50/month
Backup:             $20/month
Total:              ~$400/month = Rp 6,000,000/month
```

---

## Troubleshooting

### Common Issues

#### 1. "Cannot connect to API"

**Problem:** Frontend can't reach backend

**Solution:**
```javascript
// Check VITE_API_URL in Vercel environment variables
// Should be: https://edra-api.up.railway.app

// Check CORS in server/index.js
app.use(cors({
  origin: 'https://www.edra-arsitek.com',
  credentials: true
}));
```

#### 2. "404 on refresh"

**Problem:** React Router not configured properly

**Solution:**
Create `client/vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

#### 3. "Images not loading"

**Problem:** Wrong image paths

**Solution:**
```javascript
// Use absolute paths from public folder
<img src="/edra-logo.png" />

// Not relative
<img src="./edra-logo.png" /> ❌
```

#### 4. "Slow loading"

**Problem:** Large bundle size

**Solution:**
```javascript
// Enable lazy loading
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// Optimize images
<img src="image.jpg" loading="lazy" />

// Check build size
npm run build
```

#### 5. "DNS not propagating"

**Problem:** Domain not pointing to Vercel

**Solution:**
```bash
# Check DNS with dig or nslookup
nslookup www.edra-arsitek.com

# Wait 24-48 hours
# Clear browser cache
# Try incognito mode
```

---

## Environment Access

### Development
```
Frontend: http://localhost:5173
Backend:  http://localhost:5000
Access:   Local machine only
```

### Network Access (Local Network)
```
Frontend: http://192.168.x.x:5173
Backend:  http://192.168.x.x:5000
Access:   Same WiFi/LAN
```

### Staging
```
Frontend: https://edra-arsitek-staging.vercel.app
Backend:  https://edra-api-staging.up.railway.app
Access:   Anyone with link
```

### Production
```
Frontend: https://www.edra-arsitek.com
Backend:  https://edra-api.up.railway.app
Access:   Public
```

---

## Next Steps

### This Week
1. ✅ Finish remaining content
2. ✅ Test thoroughly on localhost
3. ✅ Fix any bugs

### Next Week
1. [ ] Create GitHub account
2. [ ] Push code to repository
3. [ ] Deploy to Vercel (staging)

### Week 3-4
1. [ ] Purchase domain
2. [ ] Configure DNS
3. [ ] Launch production! 🚀

---

## Support & Resources

### Documentation
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Railway Docs:** [docs.railway.app](https://docs.railway.app)
- **React Docs:** [react.dev](https://react.dev)
- **Vite Docs:** [vitejs.dev](https://vitejs.dev)

### Communities
- **Stack Overflow:** [stackoverflow.com](https://stackoverflow.com)
- **React Discord:** [discord.gg/react](https://discord.gg/react)
- **Dev.to:** [dev.to](https://dev.to)

### Contact
- **GitHub Issues:** [github.com/[username]/edra-arsitek/issues](https://github.com)

---

**Last Updated:** February 22, 2026

**Status:** Development Complete ✅ | Ready for Staging 🔄
