// ==========================================
// MATERI 4: MENGGUNAKAN NPM PACKAGES
// ==========================================

// Selain modul bawaan Node.js dan modul buatan sendiri, kita sangat sering
// menggunakan modul buatan orang lain dari seluruh dunia melalui NPM (Node Package Manager).
// 
// Sebelum kode ini bisa jalan, pastikan Anda telah menjalankan perintah:
// npm install
// di terminal Anda pada folder ini, untuk mengunduh package 'dayjs' yang terdaftar di package.json.

// Kita panggil package 'dayjs' (tidak perlu path './' karena ia otomatis mencarinya di folder node_modules)
const dayjs = require('dayjs');

console.log('--- Menggunakan NPM Package (dayjs) ---');

// Mendapatkan waktu saat ini
const sekarang = dayjs();
console.log('Waktu Asli:', sekarang.toString());

// dayjs sangat memudahkan pemformatan tanggal yang rumit di JavaScript biasa
console.log('Format Rapi:', sekarang.format('DD MMMM YYYY, HH:mm:ss'));
console.log('Tambah 7 hari ke depan:', sekarang.add(7, 'day').format('DD-MM-YYYY'));
