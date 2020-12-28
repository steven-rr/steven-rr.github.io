// jquery used to be used for DOM manip, but don't need it anymore. 
// jquery good for plugins or scripts to do specific action, but not suggested for DOM manipulation.

// single element and multiple element selectors.
// single element selectors means we can grab one element by its id.
// if we use single element selector on a class that appears more than once in the DOM, it just grabs
//      the first one.
// Multiple element selectors will get all elements with that class, and return HTML collection, or node list ,
//      depending on which selector we use. 

// document.getElementById()s
//      this selects things by their ID. Can't select a class, or a tag. 

console.log(document.getElementById("task-title"));

// Get things from the element .
console.log(document.getElementById("task-title").id); // id
console.log(document.getElementById("task-title").className) // can get the class name.

// Change styling -- to change, just do .style then you can do .whatever property you want. 
//                   Anything we can do in CSS we can do with .style

// we usually want to change style when we're implementing events, for dynamic functinoality.
// don't use this for just static styling, use CSS for that. 
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";
// document.getElementById("task-title").style.display = "none";

// Change content: 
// Typically want to set variable to document.getElementById("task-title") so we don't have to keep calling it.
const taskTitle = document.getElementById("task-title");

taskTitle.textContent = "Task List"; //modify content
taskTitle.innerText = "My Tasks";    // modify content
taskTitle.innerHTML = '<span style="color:red"> Task List </span>'; //innerHTML.

// document.querySelector() -- don't have to select by ID with this.
//      If there's multiple elements, then it chooses only the first one.

console.log(document.querySelector("#task-title")); // this is getting things by ID.
console.log(document.querySelector(".card-title")); // this is getting things by class.
console.log(document.querySelector("h5")); // this is getting things by element. 

document.querySelector("li").style.color = "red"; //single element selector -- only gets the first one;
document.querySelector("ul li").style.color = "blue"; //single element selector -- only gets the first one;

// suppose I wanted to select the last one:
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";

