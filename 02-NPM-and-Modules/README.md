# 02 - NPM dan Modules 📦

Pada modul ini, kita akan fokus mempelajari sistem ekosistem Node.js, yaitu **NPM (Node Package Manager)** dan sistem modul (bagaimana memecah kode kita ke banyak file).

### 📝 Daftar Materi:

1. **`package.json`**
   Ini adalah jantung dari project Node.js. Di sini kita mencatat meta-data project, package/librari pihak ketiga yang digunakan, serta `scripts` khusus (lihat bagian "scripts").
   
2. **`1-built-in-modules.js`**
   Membahas modul bawaan Node.js yang sangat berguna tanpa perlu install apapun, contohnya `fs` (File System), `os` (Operating System), dan `path`.

3. **`2-my-module.js` & `3-use-my-module.js`**
   Mengajarkan bagaimana kita bisa memecah kode yang panjang. Kita membuat fungsi di file `2` lalu mengekspornya (`module.exports`), dan kita panggil/impor di file `3` menggunakan `require()`.

4. **`4-npm-packages.js`**
   Membahas cara menggunakan *Library* buatan orang lain (Third-party package) dari internet. Dalam contoh ini, kita menggunakan `dayjs` untuk memanipulasi format tanggal dan waktu.

### 🚀 Cara Menjalankan

Pertama-tama, Anda **WAJIB** menginstal modul pihak ketiga yang tercatat di `package.json` dengan cara menjalankan:
```bash
npm install
```
di dalam folder `02-NPM-and-Modules` ini. Ini akan mengunduh paket `dayjs` ke dalam folder `node_modules`.

Setelah itu, cobalah jalankan skrip khusus yang sudah kita buat di `package.json`:
```bash
npm run halo
```

Atau jalankan file satu per satu seperti biasa:
```bash
node 1-built-in-modules.js
```
