// In JavaScript, typeof is an operator, not a method or a property.

console.log("=== JavaScript Data Types and typeof ===");

// 1. Number
let num = 42;
console.log("num =", num, "| typeof:", typeof num);
console.log("not_a_number =", NaN, "| typeof:", typeof NaN)  // VERY IMPORTANT

// 2. String
let str = "Jinesh";
console.log("str =", str, "| typeof:", typeof str);

// 3. Boolean
let bool = true;
console.log("bool =", bool, "| typeof:", typeof bool);

// 4. Undefined 
let undef;
console.log("undef =", undef, "| typeof:", typeof undef);

// 5. Null (weird quirk: typeof returns "object")
let nul = null;
console.log("nul =", nul, "| typeof:", typeof nul);

// 6. Object
let obj = { name: "Jinesh", age: 17 };
console.log("obj =", obj, "| typeof:", typeof obj);

// 7. Array (still "object", use Array.isArray to check properly)
let arr = [1, 2, 3];
console.log("arr =", arr, "| typeof:", typeof arr, "| isArray:", Array.isArray(arr));

// 8. Function
let func = function() { return "hi"; };
console.log("func =", func, "| typeof:", typeof func);

// 9. BigInt
let big = 1234567890123456789012345678901234567890n;  // More on bigInt : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
console.log("big =", big, "| typeof:", typeof big);

// 10. Symbol
let sym = Symbol("id");
console.log("sym =", sym, "| typeof:", typeof sym);

//----------------------------------------------------------------------------------------------

//=> Note that JavaScript distinguishes between String objects and primitive string values. (The same is true of Boolean and Numbers.)

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

//-------------------------------------------------------------------------------
//=> Important : number is the only datatype for numerics. that's why :-

let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true