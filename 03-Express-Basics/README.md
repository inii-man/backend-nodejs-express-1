# 03 - Express.js Basics 🌐

Folder ini adalah puncak dari pembelajaran dasar Node.js, di mana kita membangun aplikasi berbasis web menggunakan Framework Node.js yang paling populer di dunia: **Express.js**.

Express.js menyembunyikan kerumitan konfigurasi jaringan bawaan Node.js dan menyediakan fitur routing serta penanganan HTTP Request/Response dengan sangat mudah.

### 📝 Daftar Materi:

1. **`1-basic-server.js`**
   Membuat server web sederhana dari nol (from scratch). Mengajarkan cara merespon permintaan ke URL Root (`/`).

2. **`2-routing-methods.js`**
   Membahas berbagai HTTP Methods (`GET`, `POST`, `PUT`, `DELETE`) dan bagaimana routing bereaksi berdasarkan method yang berbeda meskipun URL-nya sama.

3. **`3-request-response.js`**
   Mengupas tuntas cara kerja "Request Handler". Bagaimana menangkap parameter dari URL (`req.params`, `req.query`) dan merespon dalam format yang rapi (`res.send`, `res.json`).

4. **`4-express-router/` (Folder)**
   Ini adalah contoh praktik terbaik (best practice) dalam Express.js untuk memisahkan konfigurasi jalur URL (Routes) ke dalam file tersendiri agar kode kita lebih terstruktur.

### 🚀 Cara Menjalankan

Karena Express.js adalah library pihak ketiga (bukan bawaan dari bahasa Node.js), Anda **WAJIB** menginstalnya terlebih dahulu.

Jalankan perintah ini di dalam folder `03-Express-Basics`:
```bash
npm install
```

Setelah `node_modules` terbuat, jalankan servernya:
```bash
node 1-basic-server.js
```

Lalu, buka Browser web Anda (Chrome/Safari) dan ketikkan URL: `http://localhost:3000`
Selamat, Anda telah membuat web server pertama Anda! 🎉
