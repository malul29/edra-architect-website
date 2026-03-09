# Memahami Development Mode vs Production Mode di Next.js & Payload CMS

Dalam pengembangan website menggunakan Next.js dan Payload CMS, terdapat dua lingkungan (*environment*) utama yang digunakan: **Development Mode** (Mode Pengembangan) dan **Production Mode** (Mode Produksi). Keduanya memiliki tujuan dan karakteristik yang sangat berbeda.

---

## 1. Development Mode (Mode Pengembangan)
**Perintah:** `npm run dev`

Mode ini adalah ruang kerja utama bagi developer. Mode ini dirancang khusus untuk memudahkan proses penulisan kode dan *debugging* (pencarian kesalahan).

### Karakteristik:
* **Hot Reloading / Fast Refresh:** Perubahan pada *source code* (HTML, CSS, JavaScript) akan langsung diperbarui di browser secara instan tanpa perlu memuat ulang halaman secara manual.
* **Kompilasi Real-time (*On-Demand Compilation*):** Next.js tidak menyiapkan seluruh halaman website di awal. Ia hanya akan mengkompilasi dan merender halaman secara mendadak **pada saat halaman tersebut dikunjungi**.
* **Informasi Error Mendetail:** Jika terjadi kesalahan (*error* atau *bug*), layar akan menampilkan pesan *stack trace* (jalur file dan baris spesifik) yang sangat detail untuk membantu developer menemukan letak kesalahannya.
* **Loading Terasa Lambat:** Khususnya pada sistem yang berat seperti Payload CMS, kompilasi *real-time* ini membuat *loading* antar-halaman terasa lambat di komputer lokal karena Next.js harus bekerja ekstra memproses kode mentah menjadi tampilan web saat itu juga.

---

## 2. Production Mode (Mode Produksi)
**Perintah:** `npm run build` dilanjutkan dengan `npm run start`

Mode ini adalah versi final dari website yang sudah siap diluncurkan ke server (seperti Vercel, VPS) untuk diakses oleh publik (pengguna asli).

### Karakteristik:
* **Pre-built & Optimized:** Perintah `npm run build` akan memproses, memadatkan (*minify*), dan mengoptimalkan seluruh aset (JavaScript, CSS, Gambar). Next.js akan membangun halaman statis sebanyak mungkin di awal sebelum server berjalan.
* **Super Cepat dan Ringan:** Karena halaman sudah disiapkan (*pre-built*) dan seluruh *resource* telah dikompresi, server hanya perlu mengirimkan file yang sudah jadi tersebut ke browser pengunjung. Ini membuat website dan CMS terasa sangat cepat (memuat dalam waktu < 1 detik).
* **Performa Maksimal, Bukan untuk Mengedit Kode:** Perubahan kode yang dilakukan saat server berjalan di mode produksi **tidak akan berefek**. Untuk menerapkan perubahan kode, Anda harus menghentikan server dan menjalankan proses `npm run build` kembali.

---

## 🛠️ Solusi Error: `EADDRINUSE :::3000` (Server Nyangkut di Windows)

Saat Anda berulang kali berpindah antara mode Development dan Production, terkadang server NodeJS gagal dimatikan dengan sempurna dan masih berjalan di latar belakang (Background).

Hal ini menyebabkan error: `Error: listen EADDRINUSE: address already in use :::3000` ketika Anda mencoba menjalankan ulang `npm run dev` atau `npm run start`. Artinya, Port 3000 di komputer Anda masih digunakan oleh proses sebelumnya.

Karena Anda menggunakan **Windows**, perintah Terminal ala Mac/Linux (*seperti `pkill node` atau `ps aux | grep node`*) **tidak akan berfungsi**.

### Cara Mengatasinya di Windows (PowerShell):

Buka dan jalankan perintah sakti ini di Terminal Anda:

```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -ErrorAction SilentlyContinue | Stop-Process -Force; Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
```

**Penjelasan Perintah:**
1. Mencari tahu ID Aplikasi (*OwningProcess*) yang sedang menggunakan Port `3000`.
2. Menutup secara paksa (*Stop-Process -Force*) ID Aplikasi tersebut.
3. Mencari semua proses latar belakang bernama "node" dan mematikannya secara paksa untuk memastikan bersih.

Setelah perintah di atas berhasil, Anda sekarang bebas menjalankan `npm run dev` atau `npm run start` kembali dengan normal!
