// ==========================================
// MATERI 4: EXPRESS ROUTER (Aplikasi Utama)
// ==========================================

const express = require('express');
const app = express();
const port = 3000;

// Kita bisa memisahkan pengaturan route ke dalam file-file terpisah 
// agar file 'app.js' ini tidak terlalu panjang (Best Practice / Praktek Terbaik).

// 1. Panggil (import) file router yang telah kita buat di folder 'routes'
const userRouter = require('./routes/users');

// 2. Pasang router ke dalam aplikasi utama kita menggunakan 'app.use()'
// Semua URL yang berawalan '/users' akan diserahkan pengurusannya ke 'userRouter'
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Ini adalah halaman utama. Coba buka /users atau /users/123');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`- http://localhost:${port}/users`);
    console.log(`- http://localhost:${port}/users/admin`);
});
