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

// // console.log(copy);
// const arr1 = [4, 5, 6]
// const arr = [101, 102, 103, 104, 105]; 
// arr.splice(1, 0, ...arr1) ;

// console.log(arr);
// // javascript is a single threaded language, but it can handle asynchronous operations using the event loop and callback functions.
// // The event loop allows JavaScript to perform non-blocking operations, such as handling user input, network requests, and timers, while still executing code in a single thread.
// // This means that JavaScript can continue to run other code while waiting for these operations to complete, making it efficient for handling multiple tasks simultaneously.
// // The event loop works by continuously checking the call stack and the message queue. When the call stack is empty, it takes the first message from the queue and pushes it onto the stack for execution.

// console.log("JavaScript");

// //---------------------------------------

// function example() {
//     console.log(arguments); // Array-like object of arguments
//   }
//   example(1, 2, 3); 

//------------------------------------------------

// class Car {
//   constructor (brand) {
//     this.brand = brand;
//   }

//    printBrand () {
//     console.log(this.brand);
//   }
// }

// let car1 = new Car("BMW");
// car1.printBrand();

// //--------------------------------------------

// function Bike (company) {
//   this.company = company;
// }

// let bike1 = new Bike("honda");

// Bike.prototype.printCompany = function () {
//   console.log(this.company);
// }

// bike1.printCompany();

// Bike.prototype.numPlate;

// bike1.numPlate = "BC-100";
// console.log(bike1.numPlate);

// Object.preventExtensions(bike1);

// bike1.crud = 34;
// console.log(bike1.crud);

//---------------------------------------------------------

const p = new Promise((resolve, reject) => {
  console.log("Executor is running");

  console.log("Resolve:", resolve);
  console.log("Reject:", reject);

  resolve("BOOM");
});

