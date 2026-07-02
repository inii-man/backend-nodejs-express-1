// ==========================================
// MATERI 6: EVENT LOOP (Deep Dive)
// ==========================================

// Event Loop adalah mekanisme pengulangan di dalam Node.js yang menangani 
// operasi asynchronous. Event Loop memastikan kode JavaScript tetap bisa "multi-tasking"
// meskipun ia berjalan secara "Single Thread" (Satu jalur pengerjaan).

console.log('A: Awal program');

// setTimeout akan dimasukkan ke "Message Queue" (Antrean Pesan)
// Kode di Message Queue akan dijalankan JIKA Call Stack sudah KOSONG.
setTimeout(() => {
    console.log('C: Dari setTimeout (Message Queue)');
}, 0);

// Promise akan dimasukkan ke "Job Queue" (Antrean Pekerjaan)
// Job Queue memiliki PRIORITAS LEBIH TINGGI daripada Message Queue.
Promise.resolve().then(() => {
    console.log('D: Dari Promise (Job Queue - Prioritas Tinggi)');
});

console.log('B: Akhir program');

// PERKIRAAN URUTAN EKSEKUSI (Silakan jalankan file ini untuk membuktikan):
// 1. "A: Awal program" (Masuk langsung ke Call Stack, dieksekusi seketika)
// 2. setTimeout dipanggil (dilempar ke sistem di belakang layar, lalu masuk Message Queue)
// 3. Promise dipanggil (dilempar ke sistem, lalu masuk Job Queue)
// 4. "B: Akhir program" (Masuk langsung ke Call Stack, dieksekusi seketika)
// --- Call Stack Kosong! ---
// 5. Node.js mengecek Job Queue (Prioritas tinggi). Oh ada Promise! Dieksekusi -> "D: Dari Promise"
// 6. Node.js mengecek Message Queue. Oh ada setTimeout! Dieksekusi -> "C: Dari setTimeout"

// Hasil: A -> B -> D -> C
