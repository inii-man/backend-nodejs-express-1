// ==========================================
// MATERI 1: BASIC EXPRESS SERVER
// ==========================================

// PENTING: Pastikan Anda sudah menjalankan 'npm install' di folder ini sebelumnya!

// 1. Kita panggil/impor framework Express.js
const express = require('express');

// 2. Kita buat aplikasi web utama kita dari Express
// Variabel 'app' ini akan menjadi pusat dari seluruh server web kita.
const app = express();
const port = 3000;

// 3. Menambahkan Route sederhana (Rute)
// Jika ada user (browser) yang mengakses jalur utama '/' (homepage) dengan HTTP method GET,
// Maka jalankan Request Handler function ini.
app.get('/', (req, res) => {
    // req = Request (Berisi informasi tentang siapa & apa yang diminta user)
    // res = Response (Kotak pos yang akan kita kirim kembali ke user)
    
    // Kita mengirim teks sederhana ke browser
    res.send('Halo Dunia! Selamat Datang di Server Express Pertama Saya! 🚀');
});

// 4. Nyalakan server agar ia terus mendengarkan permintaan di port tertentu
// Fungsi app.listen berfungsi menghidupkan server di background
app.listen(port, () => {
    console.log(`✅ Server berhasil berjalan!`);
    console.log(`🌐 Buka browser Anda dan kunjungi: http://localhost:${port}`);
    console.log(`Tekan Ctrl+C di terminal ini untuk mematikan server.`);
});
