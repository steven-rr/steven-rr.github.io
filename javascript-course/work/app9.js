

let val;

// converting numbers to strings.
val = String(555);
val = String(4+4);

//converting bool to string.
val = String(true);

// Date to a string:
val = String(new Date());

//Array to string:
val = String([1,2,3,4]);

//Another way to convert to string -- toString()
val = (5).toString();
val = (true).toString();

// String to Number:
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');

// passing in 100 as a string, if we parse, we parse an integer
// and store it in number data type..
val = parseInt('100');
// if we want to convert string to float, use this instead.
val = parseFloat('100.3');

//Output 
// console.log(val);
// console.log(typeof val);
// // console.log(val.length); gets length of string.
// // toFixed gives me the number wih precision of level "2", or 
// // whatver precision is specified
// console.log(val.toFixed(2));


// There's also type coercion.

// javascript saw that we're adding a stirng and a number,
// javacsript took it upon itself to change the 6 to a string, and
// then did the operation. This is type coercion. 
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

// next time, we'll look at math objects. there's an object
// that can help us round, and take square roots, and such. 