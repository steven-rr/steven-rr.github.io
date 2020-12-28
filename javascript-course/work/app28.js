//HOW TO REPLACE ELEMENT:

// create element:
const newHeading = document.createElement("h2");
// add id
newHeading.id = "task-title";
// new text node:
newHeading.appendChild(document.createTextNode("Task List"));

// get the old heading.
const oldHeading = document.getElementById("task-title");
// define parent so we can use replaceChild();
const cardAction = document.querySelector(".card-action");

//replace:
cardAction.replaceChild(newHeading, oldHeading);


// HOW TO REMOVE ELEMENT:
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// remove list item.
lis[0].remove();

// can remove by child also.
list.removeChild(lis[3]);


// classes and Attributes:
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];
let val;

// can add and remove class:
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// attributes:
val = link.getAttribute("href"); //returns whatever attribute is set to currently.
val = link.setAttribute("href", "http://google.com") // sets attribute to whatever you want.
val = link.hasAttribute("href"); //returns boolean on whether it has certain attribute.

link.removeAttribute("href"); // removes attribute.
console.log(val);
