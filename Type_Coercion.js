// Type Coercion = Implicit Type Conversion

console.log("5" - 2);   // 3  (String "5" converted to number)
console.log("5" + 2);   // "52" (String concatenation, not addition)
console.log("5" * 2);   // 10 (String "5" converted to number)
console.log("5" / "2"); // 2.5 (Both strings converted to numbers)
console.log("5" - "x"); // NaN (String "x" cannot be converted)


// IMPORTANT :- 

0 == []         // true
0 == "0"        // true
"0" == []       // false ← WTF??
