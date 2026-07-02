// ==========================================
// MATERI 4: PROMISE
// ==========================================

// Promise adalah solusi dari Callback Hell.
// Sesuai namanya, ini adalah "janji". Ia berjanji akan mengembalikan nilai di masa depan,
// apakah itu berhasil (resolve) atau gagal (reject).

// Simulasi fungsi mengambil data menggunakan Promise
function getUserDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Coba ubah jadi false untuk melihat pesan error
            if (success) {
                const data = { id: 1, name: 'Bob' };
                resolve(data); // Jika sukses, panggil resolve
            } else {
                reject('Gagal mengambil data user'); // Jika gagal, panggil reject
            }
        }, 1000);
    });
}

console.log('Memulai pengambilan data...');

// Menggunakan Promise dengan .then() dan .catch()
// .then()  menangkap nilai dari resolve()
// .catch() menangkap error dari reject()
getUserDataPromise()
    .then((user) => {
        console.log('--- Hasil Promise ---');
        console.log('User:', user);
        // Kita juga bisa me-return promise lagi (Chaining) agar tidak terjadi callback hell
        // return getPostsPromise(user.id); 
    })
    .catch((error) => {
        console.log('Error:', error);
    });
