//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(num); // undefined
// var num = 42;
// // Because var is hoisted: JavaScript moves the declaration up, but not the assignment. 
// 
// Internally it behaves like:
// var num;
// console.log(num); // undefined
// num = 42;

// | Keyword | Scope Type     | Hoisting                           | Re-declarable in same scope? |
// | ------- | -------------- | ---------------------------------- | ---------------------------- |
// | `var`   | Function Scope | ✅ (but initialized as `undefined`) | ✅                            |
// | `let`   | Block Scope    | ✅ (but *not* initialized)          | ❌                            |
// | `const` | Block Scope    | ✅ (but *not* initialized)          | ❌                            |


// console.log(a);
// console.log(b);
// console.log(c); 


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


// ----- experiment-------

// function foo(num1) {
//     return num1 + 1;
// }
// console.log(foo(3))
// foo = function (num2) {
//     return num2 + 2;
// }
// console.log(foo(3))

