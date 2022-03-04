var a = "Irfan"; var b = " nur "; var c = "Muhammad";
var d , e;

d = 21;
e = 06;

console.log(a+b+c);
console.log(d+"e");

// =========== Contoh Penulisan Variabel yang benar ===============
var aa123;
// Snack_Case
var irfan_nur_muhammad;
// CamelCase
var jumlahTotal;
var $box;
var _begin;

// ============== Strict Mode ====================
// akan membuat web browser menampilkan error dimana sebelumnya hanya ada
// “silent error”. Salah satunya ketika membuat variabel tanpa perintah var 
// Untuk masuk ke dalam Strict Mode
"use strict";

var hargaBarang = 5000000;
var ongkos_kirim = 41000; 
var totalBiaya = hargaBarang + ongkos_kirim; /* Akan Menimbulkan Error karena tidak menggunakan var */

var pajak = 10/100 + totalBiaya;

totalBiaya  = totalBiaya + pajak;
console.log(totalBiaya)

// ================== Menggunakan Variabel let ==============================
// EcmaScript 6 membawa fitur baru ke dalam JavaScript, yakni menggunakan perintah let untuk
// membuat variabel (sebagai alternatif dari var).
let jumlahTotal;
let $box;
let _begin;

// ===================== Konstanta dalam Javascript ===================================
// konstanta baru hadir pada ECMAScript 6. Untuk membuat konstanta, kita
// menggunakan perintah const. Setelah konstanta ditulis dan diberi nilai awal, isi konstanta tersebut tidak bisa ditukar dengan
// nilai lain

const NAMA = "Irfan"; /* Penulisan Kapital agar mudah diketahui*/

// =============== Identifier dan Litera =========================
// Istilah Identifier dan Literal lebih ke arah teori konsep programming, tapi cukup penting untuk
// dipahami

// Identifier sudah kita singgung sebelumnya, yakni sebutan untuk nama dari “sesuatu” dalam
// JavaScript. Contoh identifier adalah variabel, konstanta, nama fungsi (function) dan nama object.

// Literal adalah sebutan untuk nilai yang kita input ke dalam JavaScript. Umumnya literal ini
// disimpan ke dalam identifier, seperti variabel.

var nama = "Irfan"; /* String Literal*/
var umur = 23; /*Numeric Literal*/ 


