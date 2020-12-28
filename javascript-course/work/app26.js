let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// childNodes():
val = list.childNodes; //in this case returned text nodes and li nodes, because text is included between <li>  </li>. 
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //getting name of node.
val = list.childNodes[1].nodeType; // a number that represents the node type.

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// children() -- generally will use this more than child nodes.
val = list.children;  //this excludes the text nodes, typically included in childNodes();.
val = list.children[1];
list.children[1].textContent = "Hello";

// can also do children of children.
val = list.children[3].children; // li has child "a", anchor tag, so it gives us collection of links.
val = list.children[3].children[0]; // to access anchor tag, just use [0].
// list.children[3].children[0].id = "test-link"; //can add id .

// We also have first child for childNodes() and children();
val = list.firstChild;      //this is first child for childNodes(). includes text fields.
val = list.firstElementChild; //this is first child for children(). includes text fields.
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount; //getting the length of the children(). 

// get parent node -- in most cases these two are the same :
val = listItem.parentNode;   
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling:
val = listItem.nextSibling; //this includes text fields 
val = listItem.nextElementSibling; //this does not include text fields.
val = listItem.nextElementSibling.nextElementSibling; //this does not include text fields.

val = listItem.previousSibling; //includes text fields.
val = listItem.previousElementSibling; //does not include text fields.

console.log(val);

