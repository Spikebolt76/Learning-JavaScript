// var a = 45; // var has function scope, not block scope : same result = 20, 10, 45 : for let and const too

// function foo() {
//     var a = 10;

//     function bar() {
//         var a = 20;
//         console.log(a)
//     }
//     bar();
//     console.log(a)
// }
// foo();
// console.log(a);

//--------------------------------------------------

var a = 10;
// not block scope, so it just reassigns the var a
{
    var a = 40;
    console.log(a);
    {
        var a = 100;
        console.log(a);
    }
    
}
console.log(a);


