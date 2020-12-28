let val;

val = document;
// if we want to get an array collection of everything:
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// not recommended, but suppose we wanted to get all forms on page?
val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].id;     //gives us the ID of the form/
val = document.forms[0].method;  // forms have methods, get and post.
val = document.forms[0].action; // forms can also have actions, we can also get actions (php for example)

// can also do this with links.
val = document.links;
val = document.links[0];
val = document.links[0].id; // can get ID of a specific link.
val = document.links[0].className; // can get class name of a link.
val = document.links[0].classList; // we can get all classes 

// can also do this with images. 
val = document.images;

// same thing with scripts.
val = document.scripts;
val = document.scripts[2].getAttribute("src"); // can get src attributes.s

// what happens if we try to do a for each with a collection?
let scripts= document.scripts;
// for each wont work on scripts, it is for arrays only
// scripts.forEach(function(script)
// {
//     console.log(script);
// })

//to convert HTML collections to  array 
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script)
{
    console.log(script.getAttribute("src"));
})
// console.log(val);
