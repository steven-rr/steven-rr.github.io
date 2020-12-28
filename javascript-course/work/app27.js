// create element
const li = document.createElement("li");

// add a class:
li.className = "collection-item";

// add an ID:
li.id = "new-item";

// add attribute:
li.setAttribute("title","New Item");

// create text node and append
li.appendChild(document.createTextNode("hello world"));

// append li as child to ul.
document.querySelector("ul.collection").appendChild(li);

// create new link element:
const link = document.createElement("a");
link.className = "delete-item secondary-content";
// add icon HTML:
link.innerHTML = "<i class = \"fa fa-remove\"></i>"

// append link into li:
li.appendChild(link);

console.log(li);