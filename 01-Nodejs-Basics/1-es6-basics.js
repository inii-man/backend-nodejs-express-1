// ==========================================
// MATERI 1: LET, CONST, TEMPLATE STRING, DESTRUCTURING
// ==========================================

// 1. Perbedaan var, let, dan const
// ------------------------------------------
// 'var' adalah sintaks lama, jarang digunakan lagi karena scoping-nya membingungkan.
// 'let' digunakan untuk variabel yang nilainya bisa diubah (mutable).
let playerName = 'Budi';
playerName = 'Andi'; // Valid, tidak error
console.log('Player Name (let):', playerName);

// 'const' digunakan untuk konstanta yang nilainya TETAP (immutable).
const maxLevel = 100;
// maxLevel = 101; // ERROR: Assignment to constant variable.
console.log('Max Level (const):', maxLevel);


// 2. Template String (Backticks ``)
// ------------------------------------------
// Sangat memudahkan untuk menggabungkan string dan variabel (String Interpolation) 
// dan mendukung pembuatan baris baru (multi-line) dengan mudah.
const userName = 'Siti';
const age = 22;

// Cara lama:
const hiOld = 'Halo, namaku ' + userName + '.\nUmurku ' + age + ' tahun.';

// Cara baru (ES6):
const hiNew = `Halo, namaku ${userName}.
Umurku ${age} tahun.`;

console.log('\n--- Template String ---');
console.log(hiNew);


// 3. Destructuring (Objek & Array)
// ------------------------------------------
// Mengambil nilai spesifik dari objek atau array ke dalam variabel baru secara ringkas.

const user = { name: 'Joko', role: 'Admin', age: 30 };

// Destructuring Objek (harus sama dengan nama propertinya)
const { name, role } = user;
console.log('\n--- Destructuring Objek ---');
console.log(`Nama: ${name}, Peran: ${role}`);

// Destructuring Array (berdasarkan urutan posisinya)
const fruits = ['Apel', 'Mangga', 'Jeruk'];
const [firstFruit, secondFruit] = fruits;

console.log('\n--- Destructuring Array ---');
console.log(`Buah pertama: ${firstFruit}, Buah kedua: ${secondFruit}`);
