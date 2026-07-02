// ==========================================
// MATERI 5: ASYNC / AWAIT
// ==========================================

// Async-Await adalah pembaruan sintaks (syntactic sugar) dari Promise.
// Ia membuat kode asynchronous (tidak sinkron) terlihat dan bisa dibaca layaknya 
// kode synchronous (sinkron/biasa). Ini adalah cara yang paling disarankan saat ini!

// Kita gunakan fungsi Promise yang sama
function getUserDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Charlie' });
        }, 1000);
    });
}

function getPostsPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
}

// Syarat: Kita harus menggunakan keyword 'async' di depan definisi fungsi
async function displayUserAndPosts() {
    console.log('Sedang mengambil data...');

    try {
        // Keyword 'await' akan "menunggu" sampai Promise selesai (resolve)
        // lalu memasukkan hasilnya ke dalam variabel.
        const user = await getUserDataPromise();
        console.log('User berhasil didapat:', user);

        // Setelah user didapat, tunggu proses ambil post
        const posts = await getPostsPromise(user.id);
        console.log('Posts berhasil didapat:', posts);

    } catch (error) {
        // Semua error (reject dari promise) akan ditangkap di sini
        console.log('Terjadi error:', error);
    }
}

// Jalankan fungsi
displayUserAndPosts();


// ------------------------------------------
// PROMISE.ALL (EKSKUSI PARALEL)
// Jika tugas kedua tidak membutuhkan hasil tugas pertama, kita bisa menjalankan 
// secara bersamaan (paralel) untuk menghemat waktu!
/*
async function displayParallel() {
    // Array destructuring untuk menangkap hasil paralel
    const [user, posts] = await Promise.all([
        getUserDataPromise(),
        getPostsPromise(1)
    ]); // Selesai dalam 1 detik (karena jalan bersamaan) dibanding 2 detik jika berurutan.
}
*/
