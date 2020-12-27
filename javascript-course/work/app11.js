

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,web development,programming";

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

// taking the zero'th char of the string. string are arrays of chars. 
val = firstName[2];

// indexOf () - if we want to find index of a value, or character... 
val = firstName.indexOf('l');
// lastIndexOf() - if we want to go other way.
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get last character of a string :
val = firstName.charAt(firstName.length - 1);

//  substring() - getting substrings out of a string:
val = firstName.substring(0, 4);

// slice() - mostly used with arrays, but can use with strings. 
val = firstName.slice(0,4);
val = firstName.slice(-3); //will start from the back, and take the last 3. 

// split() - it can split a string into an array , based on a separator. 
val = str.split(" ");  // splits a string based off separators , and outputs as array.
val = tags.split(",");

// replace() 
val = str.replace("Brad", "Jack"); //replace something inside string, with another. 

// includes() -- returns true or false based on whether somethings inside the string.
val = str.includes("Hello");


console.log(val);
