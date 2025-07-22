// Object.prototype.userDefine = function () {
//     console.log("is present in all objects");
// }

// let arr = [1, 2, 4]

// let obj = {
//     prop1 : 12,
//     prop2 : "hell0"
// }

// arr.userDefine();
// obj.userDefine();

// let str = "Jinesh       \n"
// console.log(str.trim().length);

String.prototype.trueLength = function () {
    return this.trim().length;
}

let str1 = "    bhadja zeel   "
let str2 = "    mandu vadu    \n"

console.log(str1.trueLength());
console.log(str2.trueLength());