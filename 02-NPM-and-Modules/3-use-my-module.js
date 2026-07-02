// ==========================================
// MATERI 3: MENGGUNAKAN CUSTOM MODULE
// ==========================================

// Kita bisa memanggil (import) modul buatan kita sendiri yang ada di file lain
// menggunakan fungsi require() dan menyebutkan lokasi path filenya.
// Karena file '2-my-module.js' berada di folder yang sama, kita gunakan './'

const { namaModul, tambah, kali } = require('./2-my-module'); // Ekstensi .js boleh tidak ditulis

console.log('--- Menggunakan Modul Sendiri ---');
console.log('Informasi Modul:', namaModul);
console.log('Hasil 10 + 5 =', tambah(10, 5));
console.log('Hasil 10 * 5 =', kali(10, 5));
