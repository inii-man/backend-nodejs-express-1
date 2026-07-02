// ==========================================
// MATERI 2: METODE ROUTING (Routing Methods)
// ==========================================

const express = require('express');
const app = express();
const port = 3000;

// Routing adalah cara menentukan bagaimana aplikasi merespon permintaan dari komputer client (Browser/Postman)
// ke URL (Endpoint) tertentu dan HTTP Method tertentu (GET, POST, PUT, DELETE).

// 1. GET (Digunakan untuk MEMINTA/MENGAMBIL data)
app.get('/produk', (req, res) => {
    res.send('Ini adalah respon untuk request GET: Menampilkan daftar produk');
});

// 2. POST (Digunakan untuk MENGIRIM/MENAMBAH data baru)
app.post('/produk', (req, res) => {
    res.send('Ini adalah respon untuk request POST: Menambahkan produk baru');
});

// 3. PUT (Digunakan untuk MEMPERBARUI data yang sudah ada)
app.put('/produk', (req, res) => {
    res.send('Ini adalah respon untuk request PUT: Memperbarui produk yang ada');
});

// 4. DELETE (Digunakan untuk MENGHAPUS data)
app.delete('/produk', (req, res) => {
    res.send('Ini adalah respon untuk request DELETE: Menghapus sebuah produk');
});

// 5. ALL (Respon untuk SEMUA jenis HTTP Method)
app.all('/bebas', (req, res) => {
    res.send('Ini respon untuk HTTP Method APAPUN (GET/POST/PUT/dll) di URL /bebas');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Coba akses http://localhost:${port}/produk melalui browser (Browser hanya mengirim GET)`);
    console.log(`Untuk mencoba POST/PUT/DELETE, Anda butuh aplikasi seperti Postman atau cURL.`);
});
