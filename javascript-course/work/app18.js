
// Function DECLARATION
// however, in es6, we can have constructors in the param list. 
function greet(firstName = "John", lastName = "Doe")
{
    // back in es5, we define defaults by typeof:
    // if(typeof firstName === "undefined" )
    // {
    //     firstName = "John";
    // }
    // if(typeof lastName === "undefined")
    // {
    //     lastName = "Doe";
    // }
    return "Hello " + firstName + " " + lastName;

}

// val = greet();

// console.log(val);

//  Function EXPRESSIONS:
// the function can be named, or it can remain anonymous. you have a named variable, and an anonymous function usually
const square = function(x = 3)
{  
    return x*x;
}

console.log(square());

// Whether you use declaration or expression are normally same, but
// when it comes to hoisting, closures, expressions are preferred.

// IMMEDIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFE's

// (function(){
//     console.log(`IIFE ran..`);
// })();

(function(name){
    console.log(`Hello` + name);
})("Brad");

// sometimes this is more worth it, because you can use a module pattern.
// it just depends on your design pattern.

// PROPERTY METHOD: whenever function is put inside a object , its called a method.

const todo = 
{
    add: function()
    {
        console.log("Add TODO");
    },
    edit: function(id)
    {
        console.log(`Edit TODO ${id}`)
    }

}

// you can append function to object. 
todo.delete = function()
{
    console.log("Delete TODO");
}

todo.add();
todo.edit(22);
todo.delete();




