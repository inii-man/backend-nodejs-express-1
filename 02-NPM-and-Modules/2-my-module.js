// ==========================================
// MATERI 2: MEMBUAT CUSTOM MODULE
// ==========================================

// Bayangkan ini adalah file tempat kita menyimpan logika khusus.
// Supaya file lain tidak berantakan, kita simpan fungsi perhitungan di sini.

const namaModul = "Modul Matematika Sederhana";

// Membuat beberapa fungsi sebagai contoh
const tambah = (a, b) => a + b;
const kali = (a, b) => a * b;

// Agar file LAIN bisa menggunakan fungsi-fungsi ini,
// kita WAJIB mengekspornya menggunakan 'module.exports'.

// Kita ekspor dalam bentuk Objek
module.exports = {
    namaModul, // Sama dengan namaModul: namaModul (ES6 Shorthand)
    tambah,
    kali
};

// Setelah ini diekspor, buka file '3-use-my-module.js' untuk melihat cara penggunaannya.
