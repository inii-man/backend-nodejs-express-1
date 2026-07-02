// ==========================================
// FILE ROUTER KHUSUS USER
// ==========================================

const express = require('express');

// Bukannya menggunakan 'const app = express()', kita menggunakan 'Router()'
const router = express.Router();

// PERHATIKAN: URL di sini tidak lagi mencantumkan '/users' di awal, 
// karena awalan tersebut sudah didefinisikan di file utama (app.js).

// Jadi jalur '/' di sini sebetulnya berarti '/users/'
router.get('/', (req, res) => {
    res.send('Menampilkan seluruh data pengguna (Users)');
});

// Jalur '/:id' di sini berarti '/users/:id'
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Menampilkan profil untuk User ID: ${id}`);
});

router.post('/', (req, res) => {
    res.send('Menambahkan pengguna baru');
});

// JANGAN LUPA untuk mengekspor router ini agar bisa dipanggil oleh file utama (app.js)
module.exports = router;
