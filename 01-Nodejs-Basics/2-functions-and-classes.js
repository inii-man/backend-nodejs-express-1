// ==========================================
// MATERI 2: ARROW FUNCTION & CLASS
// ==========================================

// 1. Arrow Function
// ------------------------------------------
// Cara yang lebih ringkas untuk menuliskan fungsi di JavaScript (ES6).

// Fungsi biasa (Function Declaration)
function addNormal(a, b) {
    return a + b;
}

// Arrow Function (bisa disimpan ke dalam konstanta)
const addArrow = (a, b) => {
    return a + b;
};

// Arrow Function (jika hanya ada 1 baris return, bisa dipersingkat tanpa '{}' dan tanpa 'return')
const multiply = (a, b) => a * b;

console.log('--- Arrow Functions ---');
console.log('Hasil addNormal(2, 3):', addNormal(2, 3));
console.log('Hasil addArrow(2, 3):', addArrow(2, 3));
console.log('Hasil multiply(2, 3):', multiply(2, 3));


// 2. Class
// ------------------------------------------
// JavaScript mendukung paradigma Object-Oriented Programming (OOP) secara lebih mudah
// dengan menggunakan sintaks `class` (mirip seperti Java atau C++).

class User {
    // Constructor dijalankan saat objek baru dibuat
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method di dalam class
    greet() {
        console.log(`Halo, nama saya ${this.name} dan umur saya ${this.age} tahun.`);
    }
}

console.log('\n--- Class ---');
// Membuat objek baru (instance) dari Class User menggunakan 'new'
const user1 = new User('Rudi', 25);
user1.greet(); // Memanggil method
