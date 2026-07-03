// ==========================================
// MATERI: AUTO RESTART DENGAN NODEMON
// ==========================================

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // 💡 COBA LAKUKAN INI:
    // 1. Pastikan server dijalankan dengan perintah: npm run dev
    // 2. Ubah kalimat di bawah ini sesuka hati Anda.
    // 3. Tekan Save (Ctrl+S / Cmd+S).
    // 4. Lihat ke terminal, Nodemon akan otomatis merestart server!
    // 5. Tinggal Refresh halaman di Browser. Praktis kan? 😎

    res.send('Ini adalah server yang menggunakan fitur AUTO RESTART! Coba ubah teks ini lalu simpan (Save).');
});

app.listen(port, () => {
    console.log(`✅ Server berjalan di http://localhost:${port}`);
    console.log(`🔄 Coba buka file server.js, ubah kodenya, dan simpan. Server ini akan restart sendiri!`);
});
