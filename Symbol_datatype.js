//To create a new symbol, you use the global Symbol() function as shown in this example:

let s1 = Symbol('foo');

//The Symbol() function creates a new unique value each time you call it:

console.log(Symbol() === Symbol()); // false

// The Symbol() function accepts a description as an optional argument. 
// The description argument will make your symbol more descriptive.

// The following example creates two symbols: firstName and lastName.

let firstName = Symbol('first name'),
    lastName = Symbol('last name');

// You can access the symbol’s description property using the toString() method. 
// The console.log() method calls the toString() method of the symbol implicitly as shown in the following example:

console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)

let sym = Symbol('a symbol', 13) 
// extra arguments are silently ignored in most built-in functions unless they’re explicitly checked
console.log(sym);

//-----------------------------------------------

const a = Symbol("apple");
const b = Symbol("apple");

console.log(a === b); // false ❌ (they are unique)
console.log(a.description); // "apple" ✅
console.log(b.description); // "apple" ✅

//-----------------------------------------------

// Since a symbol is a primitive value, if you attempt to create a symbol using the new operator, you will get an error:

let s2 = new Symbol(); // error