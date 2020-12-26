// create javascript object.
// first name is key- > value is john
// last name is key -> value is parker.
// each of these is a property, tied to the student.
// allows us to have multiple attributes for certain objects.
// vehicle may have odometer reading, tires, engine size, etc.
// there are certain objects we can group together. 
// also, objects can have functions. 
// using the "this" keyword, so that we can refer to properties inside the object.

var student0 = 
{
    firstName: "Jayne", 
    lastName: "Looo", 
    age: 8,
    // can create function inside object. key is greeting. value is of type "function".
    greeting: function()
    {
        // if i have a var inside by the name of "firstName" has local scope.
        // the "this.firstName" makes it more specific .
        // var firstName;
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
};
// console.log(student0.greeting());
// using the "new" keyword, we can create an empty object. in essence,
// we've done the exact same thing as above. 
var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;

// another way to declare an object.
var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;

// theres one more way of creating reusable objects, by creating a function:
// taking variables being passed in, and assigning them to keys, thereby
// creating a "student" object. 
// now we cna create many student objects by using this. 
function Student(first, last, age)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function()
    {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
}
// now creating a new student, Jenny Laga, 5. This uses constructor and defines a new object.
var s1 = new Student("Jenny", "Laga" , 5);
// console.log(s1);
// console.log(s1.greeting());

var students = [];
// instantiating various different student objects.
students.push(new Student("Jenny","Laga", 5));
students.push(new Student("Timmy","Turner", 8));
students.push(new Student("Carl","Jr", 4));
// now we will print all the students.
// for( var i = 0; i < students.length; i++ )
// {
//     console.log(students[i].greeting());
// }

// suppose I wanted to iterate thru keys and objects by using "in" keyword.
// you typically don't want to iterate thru keys.
var student = students[0];
// for in loop.
for (var key in student)
{
    console.log(student[key]);
}

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);

// // now this prints an array that has objects.
// for( var i = 0; i < students.length; i++ )
// {
//     console.log(students[i]);
// }


// there are two ways to retrieve properties. first way is auto complete friendly.
// object is like a hashtable, or like a dictionary, it has a key and a value.
// these are very amazing things to use for collections, because it's very fast. 
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);


// // javasscript object is a collection of named values.

// var studentNames  = ["John", "Jacob","Jingle","Heimer","Smith"];

// // suppose each of these names have different attributes, such as ages.. 
// var studentAges = [5,6,5,5,7];

// // can use object.
