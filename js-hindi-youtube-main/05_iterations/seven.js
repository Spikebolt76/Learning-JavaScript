const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// chainging :-
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// These methods are often chained for complex operations:

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
   .filter(num => num % 2 === 0) // [2, 4, 6]
   .map(num => num * 2)          // [4, 8, 12]
   .reduce((acc, num) => acc + num, 0); // 24
 console.log(result); // Output: 24
