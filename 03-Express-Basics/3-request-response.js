// ==========================================
// MATERI 3: REQUEST DAN RESPONSE OBJECT
// ==========================================

const express = require('express');
const app = express();
const port = 3000;

// Middleware agar Express bisa membaca data yang dikirim di 'body' request dalam format JSON
app.use(express.json()); 

// ------------------------------------------
// REQUEST OBJECT (req) - Informasi yang KITA TERIMA dari User
// ------------------------------------------

// 1. Path Parameters (Variabel di dalam URL, ditandai dengan ':')
// Contoh akses: http://localhost:3000/users/123
app.get('/users/:id', (req, res) => {
    // req.params akan menangkap nilai '123'
    const userId = req.params.id; 
    res.send(`Anda sedang mencari profil user dengan ID: ${userId}`);
});

// 2. Query Parameters (Nilai opsional di akhir URL, ditandai dengan '?')
// Contoh akses: http://localhost:3000/search?keyword=buku&page=2
app.get('/search', (req, res) => {
    // req.query menangkap nilai setelah tanda tanya
    const keyword = req.query.keyword;
    const page = req.query.page;
    res.send(`Anda mencari: "${keyword}" pada halaman: ${page}`);
});

// 3. Request Body (Data tersembunyi yang dikirim client, biasanya untuk form POST)
app.post('/login', (req, res) => {
    // req.body berisi objek yang dikirim oleh client (membutuhkan app.use(express.json()) di atas)
    const { username, password } = req.body;
    res.send(`Mencoba login dengan username: ${username} dan password: ${password}`);
});


// ------------------------------------------
// RESPONSE OBJECT (res) - Data yang KITA KIRIM ke User
// ------------------------------------------

// 1. Mengirim format Teks / HTML
app.get('/send-text', (req, res) => {
    res.send('<b>Ini dikirim sebagai Teks atau HTML biasa</b>');
});

// 2. Mengirim format JSON (Sangat penting untuk pembuatan API!)
app.get('/send-json', (req, res) => {
    const data = {
        status: "sukses",
        pesan: "Data berhasil diambil",
        data: [1, 2, 3]
    };
    // res.json otomatis mengubah objek JS menjadi format JSON
    res.json(data); 
});

// 3. Mengatur Response Status (Misal 404 Not Found, 200 OK, 500 Error)
app.get('/send-status', (req, res) => {
    // Memberikan status 404 (Not Found) dan pesan error
    res.status(404).send('Halaman yang Anda cari tidak ditemukan!');
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Coba akses: http://localhost:${port}/users/99`);
    console.log(`Coba akses: http://localhost:${port}/search?keyword=sepatu&page=1`);
    console.log(`Coba akses: http://localhost:${port}/send-json`);
});
