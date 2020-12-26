
// // portal for teacher at school, and has lists of student names we have to maintain.
// var student1 = "Timmy"
// var student2 = "Janessa"
// var student3 = "Arun"


// can store balances in an array, like so:
var balances = [50.45, 4000.12, -300.50];

// creating array of students.
var studentNames = ["Timmy", "Janessa", "Arun"];
// NEVER EVER want to use arrays to store mixed data types.. use objects for that.
// if you start using stuff like this, it's hard to know what to expect from it. 
var person = ["John", 12, "USA", true]; //Name, integer, USA, true or false.

// with loops, we can go thru array and get all names out.
// can output like this:
// console.log(students);
// make empty array, then append elements.
var naughtyList=  [];
// how to add elements to array:
naughtyList.push(studentNames[0]);
// how to remove elements from array;
// goes thru list , and if it finds Timmy, we get index from list.  if not found, index = -1.
var index = naughtyList.indexOf("Timmy");
console.log(naughtyList);
if (index > -1) 
{
    // splice cuts the array. at the index. common fx for javascript. 
    // u will never manipulate data with splice at a large scale
    // arrays used moreso for data storage, not data management, there's better ways to manage data.
    naughtyList.splice(index, 1);
}
console.log(naughtyList);

