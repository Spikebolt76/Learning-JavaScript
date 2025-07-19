// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros) --> 'push' actually modifies the existing array, adds the element as whole 

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros) --> 'concat' returns a new array, concates all the values of argument array
// // console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))

//console.log(Array.from(Object.values({name: "Jinesh", age: 18})));
//console.log(Array.from(Object.keys({name: "Jinesh", age: 18})));

// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// const arr1 = [1, 3, 4, 6]
// const arr2 = ['a', 'b', 'c']
// const var1 = 34
// const result = arr1.concat(var1)

// console.log(result)

var a = 12
var b = 45
var c = "Jinesh"
var arr = [a, b, c]
console.log(arr);
