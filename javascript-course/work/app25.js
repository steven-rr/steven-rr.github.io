// document.getElementsByClassName (class= "") 

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

//     // we don't have to search for the class on a global scope, can do a subsearch.

// const listItems = document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listItems);


// document.getElementsByTagName -- getting all elements by (Tag <>).
// let lis = document.getElementsByTagName("li");

// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// // Can convert HTML collection into array for array properties and methods.

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index)
// {
//     console.log(li.className);
//     li.textContent = `${index} : Hello`;
// })

// // console.log(lis);

// document.querySelectorAll()
const items = document.querySelectorAll("ul.collection li.collection-item");
console.log(items);

// didn't have to convert to array since it's a node list.
items.forEach(function(item, index)
{
    item.textContent = `${index} : Hello`;
})

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li, index)
{
    li.style.background = "#ccc";
})

for(let i =0; i < liEven.length; i++)
{
    liEven[i].style.background = "#f4f4f4"
}