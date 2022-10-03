// 1.
// Method : Array pop()
// Kegunaan : Untuk menghapus elemen terakgir dari array
// Contoh Penggunaan :
var arr = ["C", "PHP", "Python", "Javascript"];
arr.pop();
// Expected Output : C, PHP, Python

// 2.
// Method : Array push()
// Kegunaan : Untuk menambahkan elemen baru ke akhir dari sebuah array
// Contoh Penggunaan :
var arr = ["C", "PHP", "Python", "Javascript"];
arr.push("Java");
// Expected Output : C, PHP, Python, Javascript, Java

// 3.
// Method : Array toString()
// Kegunaan : Untuk mengkonversi array menjadi string
// Contoh Penggunaan :
var arr = ["C", "PHP", "Python", "Javascript"];
arr.toString();
// Expected Output : C, PHP, Python, Javascript

// 4.
// Method : Array join()
// Kegunaan : Untuk menggabungkan elemen array menjadi string. 
// Dengan kata lain, method "join()" menempatkan semua elemen array ke dalam daftar string.
// Apabila tidak terdapat paramater, maka akan dipisahkan dengan koma
// Contoh Penggunaan (tidak terdapat parameter):
var arr = ["C", "PHP", "Python", "Javascript"];
arr.join();
// Expected Output : C, PHP, Python, Javascript
// Contoh Penggunaan (terdapat parameter):
var arr = ["C", "PHP", "Python", "Javascript"];
arr.join("-");
// Expected Output : C - PHP - Python - Javascript

// 5.
// Method : Array splice()
// Kegunaan : Untuk menambahkan dan menghapus item dari array
// syntax
// array.splice(index, howMany, [element1][, .. , elementN]);
// index => index param yang menentukan dimana item baru harus dimasukkan
// howMany => integer yang menunjukkan jumlah elemen arrray lama yang akan dihapus
// jika howMany disetel ke 0, tidak ada item yang akan dihapus dalam daftar array
// Contoh Penggunaan splice() => menambahkan:
var arr = ["C", "PHP", "Python", "Javascript"];
arr.splice(2, 0, "Laravel", "React");
// Expected Output : C, PHP, Laravel, React, Python, Javascript
// Contoh Penggunaan splice() => menghapus:
var arr = ["C", "PHP", "Python", "Javascript"];
arr.splice(0, 1, "Laravel", "React");
// Expected Output : PHP, Python, Javascript


// 6. 
// Method : Array sort()
// Kegunaan : Untuk mengurutkan array pada javascript baik secara alfabet maupun numerik
// Contoh Penggunaan :
var arr = ["PHP", "Javascript", "C", "Pyhton"];
arr.sort();
// Expected Output : C, Javascript, PHP, Python

// 7. 
// Method : Array shift()
// Kegunaan : Untuk menghapus elemen pertama dari array
// Contoh Penggunaan :
var arr = ["PHP", "Javascript", "C", "Pyhton"];
arr.shift();
// Expected Output : Javascript, C, Pyhton

// 8. 
// Method : Array unshift()
// Kegunaan : Untuk menambahkan elemen baru ke awal array
// Contoh Penggunaan :
var arr = ["PHP", "Javascript", "C", "Pyhton"];
arr.unshift("Laravel");
// Expected Output : Laravel, PHP, Javascript, C, Pyhton

// 9.
// Method : Array reverse()
// Kegunaan : Untuk membalik urutan elemen dalam array
// Contoh Penggunaan :
var arr = ["PHP", "Javascript", "C", "Pyhton"];
arr.reverse();
// Expected Output : Python, C, Javascript, PHP

// 10. 
// Method : Array concat()
// Kegunaan : Untuk menggabungkan dua atau lebih array dan membuat yang baru
// Contoh Penggunaan :
var arr = ["PHP", "Javascript", "C", "Pyhton"];
var newarr = ["React", "Laravel"]
var join = arr.concat(newarr);
// Expected Output : PHP, Javascript, C, Python, React, Laravel

// 11.
// Method : Array slice()
// Kegunaan : Untuk memilih elemen dalam array dan membuat yang baru. Hal ini dapat mengambil satu atau dua argumen.
// Contoh Penggunaan :
var arr = ["PHP", "Javascript", "C", "Pyhton"];
var arr = lang.slice(1,3)
// Expected Output : Javascript, Python

// 12. 
// Method : Array filter()
// Kegunaan : Untuk memfilter array, sesuai dengan kondisi
// Contoh Penggunaan :
<p> function isCheck(value) {
    return value < 15; 
}
var filter = [8, 17, 5, 14].filter(isCheck);
<p
// Expected Output : 8,5,14

// 13.
// Method : Array find()
// Kegunaan : Untuk menemukan elemen pertama dari sebuah array
// Contoh Penggunaan :
function isCheck(value) {
    return value >= 9;
}
var find = [8, 2, 10, 3].find(isCheck);
// Expected Output : 10

// 14.  
// Method : Array forEach()
// Kegunaan : Untuk memungkinkan pemanggilan fungsi pada setiap elemen array dengan cara yang mudah
// Contoh Penggunaan :
var num = [2,6,8,3];
num.forEach(function(item) {
    document.writeln(item);
});
// Expected Output : 2 6 8 3

// 15.
// Method : Array map()
// Kegunaan : Untuk membuat array dengan memanggil fungsi tertentu pada setiap elemen dalam array asli
// Contoh Penggunaan :
var numbers = [9, 16, 25, 36];
var x = numbers.map(Math.sqrt);
document.write(x);
// Expected Output : 3,4,5,6

// 16.
// Method : Array length()
// Kegunaan : Untuk menambahkan elemen baru ke array dengan mudah
// Contoh Penggunaan :
const friends = ["Audi", "Ghilba", "Shinta"];
friends[friends.length] = "Nita";
// Expected Output : Audi, Ghilbe, Shinta, Nita

// 17. 
// Method : Array some()
// Kegunaan : Untuk memeriksa apakah setidaknya satu elemen array cocok dengan predikat yang diberikan. Jika tidak ada elemen array yang cocok dengan predikat, maka itu akan mengembalikan false
// Contoh Penggunaan :
var numerik = [4, 13, 14, 17, 18];

function checkNumber(numerik) {
    return num >= 18;
}

document.write(numerik.some(checkNumber));
// Expected Output :True 

// 18.
// Method : Array every()
// Kegunaan : Untuk memeriksa apakah semua elemen array cocok dengan predikat
// Contoh Penggunaan :
var nums = [2, 8, 12, 16];

function checkNumber(num) {
    return num >= 2;
}

document.write(nums.every(checkNumber));
// Expected Output : true

// 19.  
// Method : Array include()
// Kegunaan : Untuk mengembalikkan true jika array javascript berisi elemen tertentu, jika tidak itu akan mengembalikkan false
// Contoh Penggunaan :
[1,2,3].includes(2);
[1,2,3].includes(4);
// Expected Output :
// true
// false

// 20.
// Method : Array isArray()
// Kegunaan : Untuk memeriksa apakah suatu objek adalah array. Fungsi ini mengembalikkan true objek adalah array, jika tidak mengembalikan false
// Contoh Penggunaan :
var arr = [1, 2, 3, 4]

document.write("Return value = " + Array.isArray(arr));
// Expected Output : Return value = true 