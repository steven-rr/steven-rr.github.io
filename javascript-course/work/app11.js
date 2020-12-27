

const firstName = "William";
const lastName = "Johnson";
const age = 36;

let val;
val = firstName + lastName;

// Concatenation.
val = firstName + " " + lastName;

// Appending (add on to variable): 
val = "Brad ";
val = val +  "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// with ES6, they added template literals, also called template strings.
// makes this much easier. (Doing that next video)

// Escaping. 
// started string with single quote, and apostophre is looking at it like
// the end of the string. one solution is to just use double quotes.
// you can also escape with a BACKSLASH.
val = 'That\'s awesome, I can\'t wait. ';

// Length.
val = firstName.length;

// Concat
val = firstName. concat(" " , lastName);

// Change case:
val = firstName.toUpperCase();
val = firstName.toLowerCase();


console.log(val);
