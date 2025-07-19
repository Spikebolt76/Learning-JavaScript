// LOGICAL OR || operator :-
//---------------------------------------------------------------------------------------
// Examples of expressions that can be converted to false are:
// null;
// NaN;
// 0;
// empty string ("" or '' or ``);
// undefined.

// Logical OR (||): Returns the right-hand operand if the left-hand operand is falsy (false, 0, "", null, undefined, NaN).
// Nullish Coalescing (??): Returns the right-hand operand only if the left-hand operand is nullish (null or undefined).

console.log(true || true); // t || t returns true
console.log(false || true); // f || t returns true
console.log(true || false); // t || f returns true
console.log(false || 3 === 4); // f || f returns false
console.log("Cat" || "Dog"); // t || t returns "Cat"
console.log(false || "Cat"); // f || t returns "Cat"
console.log("Cat" || false); // t || f returns "Cat"
console.log("" || false); // f || f returns false
console.log(false || ""); // f || f returns ""
// console.log(false || varObject); // f || object returns varObject


// LOGICAL AND && operator : Returns the first falsy value it finds (left to right), or the last value if all are truthy.
//----------------------------------------------------------------------------------------

console.log(a1 = true && true); // t && t returns true
console.log(a2 = true && false); // t && f returns false
console.log(a3 = false && true); // f && t returns false
console.log(a4 = false && 3 === 4); // f && f returns false
console.log(a5 = "Cat" && "Dog"); // t && t returns "Dog"
console.log(a6 = false && "Cat"); // f && t returns false
console.log(a7 = "Cat" && false); // t && f returns false
console.log(a8 = "" && false); // f && f returns ""
console.log(a9 = false && ""); // f && f returns false


// DOUBLE NOT !! operator :-
//-----------------------------------------------------------------------------------------

console.log(!!true); // !!truthy returns true
console.log(!!{}); // !!truthy returns true: any object is truthy…
console.log(!!new Boolean(false)); // … even Boolean objects with a false .valueOf()!
console.log(!!false); // !!falsy returns false
console.log(!!""); // !!falsy returns false
console.log(!!Boolean(false)); // !!falsy returns false
