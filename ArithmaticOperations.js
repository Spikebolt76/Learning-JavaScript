//  Basic Arithmetic Operators : 

console.log(5 + 3);  // 8
console.log(5 - 3);  // 2
console.log(5 * 3);  // 15
console.log(5 / 2);  // 2.5
console.log(5 % 2);  // 1 (remainder of 5 ÷ 2)
console.log(5 ** 3); // 125 (5 to the power of 3)

// Increment (++) and Decrement (--) :

var a = 5;
console.log(a++); // 5 (returns current value, then increments)
console.log(a);   // 6

var b = 5;
console.log(++b); // 6 (increments first, then returns new value)
console.log(b);   // 6

var c = 5;
console.log(c--); // 5 (returns current value, then decrements)
console.log(c);   // 4

var d = 5;
console.log(--d); // 4 (decrements first, then returns new value)
console.log(d);   // 4

// special Cases :-

console.log(5 / 0);  // Infinity
console.log(-5 / 0); // -Infinity
console.log(0 / 0);  // NaN (Not a Number)

console.log(-5 % 2); // -1
console.log(5 % -2); // 1

// Order of operations example :-

console.log(5 + 2 * 3); // 11 (Multiplication first, then addition)
console.log((5 + 2) * 3); // 21 (Parentheses first)
console.log(2 ** 3 * 2); // 16 (Exponentiation first, then multiplication)
