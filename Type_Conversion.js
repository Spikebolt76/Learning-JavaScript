console.log("=== JavaScript Type Conversion ===");

// ---------- 1. Implicit Type Conversion ----------  

console.log("\n-- Implicit Type Conversion (Type Coercion) --");

let result1 = "5" + 2;           // "52" (number to string)
console.log('"5" + 2 =', result1, "| typeof:", typeof result1);

let result2 = "5" - 2;           // 3 (string to number)
console.log('"5" - 2 =', result2, "| typeof:", typeof result2);

let result3 = "10" * "2";        // 20
console.log('"10" * "2" =', result3, "| typeof:", typeof result3);

let result4 = true + 1;          // 2 (true becomes 1)
console.log('true + 1 =', result4, "| typeof:", typeof result4);

let result5 = false + "abc";     // "falseabc"
console.log('false + "abc" =', result5, "| typeof:", typeof result5);

let result6 = null + 1;          // 1
console.log('null + 1 =', result6, "| typeof:", typeof result6);

let result7 = undefined + 1;     // NaN
console.log('undefined + 1 =', result7, "| typeof:", typeof result7);


// ---------- 2. Explicit Type Conversion ----------

console.log("\n-- Explicit Type Conversion (Manual) --");

let str = "123";
let num = Number(str);           // Convert string to number
console.log('Number("123") =', num, "| typeof:", typeof num);

let num2 = 456;
let str2 = String(num2);         // Convert number to string
console.log('String(456) =', str2, "| typeof:", typeof str2);

let bool1 = Boolean(1);          // true, ANY NUMBER OTHER THAN 0 IS CONVERTED TO TRUE (INCLUDING NEGATIVES AND DECIMALS)
let bool2 = Boolean(0);          // false
console.log("Boolean(1) =", bool1, "| Boolean(0) =", bool2);

/*
Boolean(0);           // false
Boolean(NaN);         // false
Boolean("");          // false
Boolean(null);        // false
Boolean(undefined);   // false
Boolean(false);       // false
*/

let floatStr = "3.14";
let parsed = parseFloat(floatStr);
console.log('parseFloat("3.14") =', parsed, "| typeof:", typeof parsed);

let intStr = "99 bottles";
let parsedInt = parseInt(intStr); // Only number part taken
console.log('parseInt("99 bottles") =', parsedInt, "| typeof:", typeof parsedInt);

let notNumber = "abc";
let n = Number(notNumber); // NaN
console.log('Number("abc") =', n, "| typeof:", typeof n);

let flt = "3.142"
let fltNum = Number(flt)
console.log(typeof(fltNum))

// if your string has junk after the number, parseFloat() is more forgiving than Number().

Number("10.5abc")      // ❌ NaN
parseFloat("10.5abc")  // ✅ 10.5
