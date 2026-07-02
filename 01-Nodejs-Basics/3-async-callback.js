// ==========================================
// MATERI 3: ASYNCHRONOUS & CALLBACK
// ==========================================

// Node.js menggunakan sistem eksekusi "Single Thread - Non Blocking".
// Artinya, Node.js tidak akan menunggu operasi yang lama (seperti baca database) selesai.
// Node.js akan lanjut mengeksekusi baris berikutnya, dan saat operasi lama tadi selesai, 
// ia akan memanggil sebuah "Callback function".

console.log('--- Mulai ---');

// Simulasi fungsi asynchronous (misal: mengambil data dari internet)
function getUserData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'Alice' };
        // Setelah 1 detik, jalankan fungsi callback dan berikan datanya
        callback(null, data); // argumen pertama biasanya 'error', kedua 'data'
    }, 1000); // delay 1000ms (1 detik)
}

// Kita memanggil fungsi di atas
getUserData((error, user) => {
    if (error) {
        console.log('Terjadi kesalahan:', error);
        return;
    }
    console.log('Data User Ditemukan:', user);
});

console.log('--- Selesai ---');

// PERHATIKAN URUTAN DI TERMINAL SAAT DIJALANKAN:
// 1. --- Mulai ---
// 2. --- Selesai ---
// 3. Data User Ditemukan: { id: 1, name: 'Alice' }
// Node.js tidak "memblokir" atau menunggu selama 1 detik, melainkan langsung ke "Selesai", lalu mengeksekusi callback.


// ------------------------------------------
// MASALAH: CALLBACK HELL (Callback di dalam Callback di dalam Callback...)
// Jika kita memiliki banyak operasi beruntun, kode akan menjorok ke dalam (pyramid of doom).
// Contoh (hanya ilustrasi):
/*
getUsers((err, users) => {
    getPosts(users[0].id, (err, posts) => {
        getComments(posts[0].id, (err, comments) => {
            console.log('Comments:', comments);
            // Kodenya jadi sangat jelek dan sulit dibaca!
        });
    });
});
*/
