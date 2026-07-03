# 04 - Auto Restart Server 🔄

Secara bawaan (default), jika kita menjalankan server Node.js dengan perintah `node server.js` dan kemudian mengubah kodenya, **perubahan tersebut tidak akan langsung muncul**. Kita harus mematikan server secara manual (tekan `Ctrl+C`) lalu menyalakannya kembali.

Tentu ini sangat merepotkan saat proses pengembangan (Development) karena kita akan sering sekali mengubah kode. 

Solusinya adalah menggunakan *Package* pihak ketiga seperti **`nodemon`** (atau bawaan dari Node.js terbaru yaitu `--watch`).

### 📝 Materi Kali Ini

Di folder ini, kita akan:
1. Memasang package `nodemon` sebagai **Dev Dependencies** (hanya untuk proses development).
2. Menambahkan custom script di `package.json` yang menjalankan server menggunakan `nodemon`.

### 🚀 Cara Menjalankan

1. Buka terminal di dalam folder `04-Auto-Restart-Nodemon`.
2. Jalankan perintah instalasi (karena ada package `express` dan `nodemon`):
   ```bash
   npm install
   ```
3. Coba jalankan server dengan perintah khusus yang sudah disiapkan di `package.json`:
   ```bash
   npm run dev
   ```
   > **Note:** Kita menggunakan `npm run dev` yang isinya akan mengeksekusi `nodemon server.js`.

4. Buka file `server.js`, lalu **ubah** teks res.send() dengan kata-kata Anda sendiri.
5. Simpan (Save) file tersebut. Perhatikan Terminal Anda! Server otomatis *restart* tanpa perlu ditekan `Ctrl+C`.
6. Refresh browser Anda, dan perubahannya langsung terlihat! 🎉
