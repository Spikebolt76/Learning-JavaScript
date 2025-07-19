// // let obj = {
// //     int : 12,
// //     float : 12.5,
// //     string : "Jinesh"
// // };

// // delete obj.float;

// // console.log(obj);

// //"use strict";

// var obj = {};
// Object.defineProperty(obj, "x", { value: 42, writable: false });
// obj.x = 9; // TypeError: Cannot assign to read-only property

// (function() {
//     console.log('IIFE');
// })();

// function sum (a = 1, b = 2) {
//     return a + b;
// }

// console.log(sum(1, 4));

// let arr = [1, 100000, 20]

// arr.sort();

// console.log(arr);

// arr.sort( (a, b) => a - a);

// console.log(arr);

// let strNum = "-23abc";

// console.log(typeof(strNum));

// console.log(typeof(+strNum));


// function foo () {
//     console.log("hell0");
//     if (true) {
//         var x = 10;
//         //let y = 20;
//     }
//     console.log(`${x} and `);
// }
// foo();
// console.log(`${x} and ${y}`);
// let str = 
// `ddtetert
//     stertert
//         uuhuyu`;

// console.log(str);
// console.log(JSON.stringify(str));
// console.log(str.length);

// const original = { name: "Jinesh", address: { city: "Surat" } };

// const copy = Object.assign({sd: 34}, original);

// console.log(copy);
const arr1 = [4, 5, 6]
const arr = [101, 102, 103, 104, 105];
arr.splice(1, 0, ...arr1) ;

console.log(arr);
