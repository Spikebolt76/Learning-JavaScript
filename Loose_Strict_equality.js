// Loose equality :-

// Allows type coercion (converts values before comparing). This can lead to unexpected results

console.log(5 == "5");   // true (string "5" is converted to number 5)
console.log(0 == false); // true (false is converted to 0)
console.log(null == undefined); // true (special rule: they are considered equal)
console.log(" " == 0);   // true (empty string is converted to 0)
console.log([] == 0);    // true (empty array is converted to an empty string, then to 0)

// Strict equality :- 

// Checks both value and type. If the types are different, it immediately returns false without attempting conversion.

console.log(5 === 5);   // true (same value, same type)
console.log(5 === "5"); // false (number vs. string)
console.log(null === undefined); // false (different types)
console.log(0 === false); // false (number vs. boolean)
console.log(NaN === NaN); // false (special case, NaN is not equal to itself)

// Strict Inequality (!==) vs. Loose Inequality (!=)
// !== (Strict Inequality): Checks value and type.
// != (Loose Inequality): Allows type conversion.

console.log(5 !== "5"); // true (number vs. string)
console.log(5 != "5");  // false (string "5" is converted to number)
console.log(null !== undefined); // true (different types)
console.log(null != undefined);  // false (special case: they are loosely equal)
