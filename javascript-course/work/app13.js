// Create some arrays, both valid ways to create them :

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple","Banana","Orange","Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];

// console.log(mixed);

let val;

// Get array length
val = numbers.length;

// Check if is array:
val = Array.isArray(numbers);

// Get single value.
val = numbers[3];
val = numbers[0];

// insert into array:
numbers[2] = 100;

// indexOf() - Find index of value:
val = numbers.indexOf(36);

// MUTATING ARRAYS:
// numbers.push(250); // push() - adding to the end of array
// numbers.unshift(120); //unshift() - adding to beginning of array.
// numbers.pop(); // pop() - removes last element. 
// numbers.shift(); //shift() - removes first element.
// numbers.splice(1,1); //splice() - removes "nth" element, parameters are where we want to start, and end.  
// numbers.reverse(); //reverse() - reverse the array.

// concat() - combine two arrays. 
val = numbers.concat(numbers2); 

//sort() - sorts in ABC order. 
val = fruit.sort(); 

//sort() - wont work with numbers like this, have to add compare function.
val = numbers.sort(); 
// Use compare function. 
val = numbers.sort(function(x,y)
{
    return x- y; 
})

// Reverse sort:
val = numbers.sort(function(x,y)
{
    return y-x;
})

// Find() -- looks through our numbers, and first number that is under 50 
// is returned. 
function under50(num)
{
    return num < 50;
}
val = numbers.find(under50);
function over50(num)
{
    return num > 50;
}


console.log(numbers);
console.log(val);
