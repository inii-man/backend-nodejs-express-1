# Node.js & Express Playground 🚀

Selamat datang di repositori pembelajaran **Node.js, NPM, dan Express.js**. 
Repositori ini dirancang khusus untuk keperluan *hands-on* atau praktek langsung, dimana setiap kodenya dibuat sesederhana mungkin dilengkapi dengan penjelasan pada setiap baris kodenya (dalam Bahasa Indonesia).

Materi ini disusun ke dalam 4 bagian utama yang berurutan. Sangat disarankan untuk mempelajarinya dari folder `01` hingga `04`.

## 📂 Struktur Materi

1. **[01-Nodejs-Basics](./01-Nodejs-Basics)**
   Membahas dasar-dasar ES6 (Let, Const, Arrow Function, Class) dan konsep Asynchronous di Node.js (Callback, Promise, Async/Await, Event Loop).
2. **[02-NPM-and-Modules](./02-NPM-and-Modules)**
   Membahas apa itu NPM, cara kerja `package.json`, cara menggunakan modul bawaan Node.js, serta cara membuat modul buatan sendiri.
3. **[03-Express-Basics](./03-Express-Basics)**
   Membahas cara membuat server web menggunakan framework **Express.js**, metode Routing, serta pemrosesan Request dan Response.
4. **[04-Auto-Restart-Nodemon](./04-Auto-Restart-Nodemon)**
   Membahas cara me-*restart* server secara otomatis setiap kali ada perubahan kode menggunakan *package* tambahan seperti **nodemon**.

---

## 💻 Persiapan & Instalasi

Sebelum memulai, pastikan Anda telah menginstal **Node.js** di komputer Anda.

### 1. Download & Install Node.js
Kunjungi [nodejs.org](https://nodejs.org/) dan unduh versi **LTS (Long Term Support)** (Sangat disarankan karena versi ini paling stabil). Ikuti petunjuk instalasi (Next, Next, Install).

### 2. Verifikasi Instalasi
Buka terminal / Command Prompt (CMD), ketik perintah berikut untuk memastikan Node.js sudah terinstal:
```bash
node -v
npm -v
```
Jika muncul angka versi (contoh: `v18.x.x`), berarti Node.js dan NPM sudah berhasil diinstal.

---

## 🏃‍♂️ Cara Menjalankan Kode

Secara umum, file JavaScript berekstensi `.js` dapat dijalankan menggunakan perintah `node` diikuti nama filenya melalui terminal.

**Langkah-langkah umum:**
1. Buka Terminal / Command Prompt.
2. Arahkan ke folder materi yang ingin dicoba, contohnya:
   ```bash
   cd 01-Nodejs-Basics
   ```
3. Jalankan file yang diinginkan:
   ```bash
   node 1-es6-basics.js
   ```

*Catatan: Pada folder 02, 03, dan 04 Anda mungkin perlu menginstal package pihak ketiga (`node_modules`) terlebih dahulu menggunakan perintah `npm install` di dalam folder tersebut sebelum menjalankan kodenya.*

Selamat mencoba dan mengajar! 🎉
