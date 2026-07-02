// ==========================================
// MATERI 1: BUILT-IN MODULES (Modul Bawaan)
// ==========================================

// Node.js menyediakan banyak modul bawaan sejak awal (tanpa perlu npm install).
// Untuk menggunakannya, kita menggunakan fungsi 'require'.

// 1. Modul 'os' (Operating System)
const os = require('os');
console.log('--- Modul OS ---');
console.log('Platform Sistem Operasi:', os.platform());
console.log('Arsitektur CPU:', os.arch());
console.log('Total Memori (Bytes):', os.totalmem());

// 2. Modul 'path' (Pengelolaan path file/folder)
const path = require('path');
console.log('\n--- Modul Path ---');
const fakePath = '/users/pengajar/documents/materi.pdf';
console.log('Nama File:', path.basename(fakePath));
console.log('Ekstensi File:', path.extname(fakePath));

// 3. Modul 'fs' (File System) untuk membaca dan menulis file
const fs = require('fs');
console.log('\n--- Modul FS ---');

// Kita coba membuat file baru secara otomatis menggunakan Node.js
const filePath = path.join(__dirname, 'halo.txt'); // __dirname adalah lokasi folder saat ini

// writeFile membutuhkan: path, isi file, dan callback function
fs.writeFile(filePath, 'Halo, ini file yang dibuat otomatis oleh Node.js!', (err) => {
    if (err) {
        console.error('Gagal membuat file', err);
        return;
    }
    console.log('File halo.txt berhasil dibuat di folder ini!');
    
    // Mari kita baca file yang baru saja dibuat
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Isi file halo.txt:', data);
    });
});
