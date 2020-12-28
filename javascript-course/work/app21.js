// We are in the global scope.
var a = 1;
let b = 2;
const c = 3;

// function test()
// {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("Function Scope: " , a, b, c);
// }

// test();

// if(true)
// {
//     // Block scope:
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("If Scope: ", a, b, c);

// }

// here , a is going to chaneg within the GLOBAL scope. 
// loop changes the value of the global a. 
// this is a reason why let and const were created. 
for(var a = 0; a < 10; a++)
{
    console.log(`Loop: ${a}`);
}
console.log("Global Scope: ", a, b, c);
