// All this stuff is compatible in modern browsers, aside from IE 6/7.

const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// inserting HTML from javascript.
// fetch something thru AJAX, and put in UL, or table with dynamic data, we'll do that with javascript. 

// First, without template strings (es5)
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + " </li><li>Job: " + job + "</li><li>City: " + city + " </li></ul>";

// Can make it better by putting things in separate lines and using concat. 
html = "<ul>" +
        "<li>Name: " + name + "</li>" + 
        "<li>Age: " + age + " </li>" + 
        "<li>Job: " + job + "</li>" + 
        "<li>City: " + city + " </li>" + 
        "</ul>";

function hello()
{
    return "hello";
}
// With template strings (es6) using backticks!!!! (next to number 1)
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>${2 + 2} </li>
        <li>${hello()}</li>
        <li>${ age > 30 ? 'Over 30' : 'Under 30'} </li>
    </ul>
`
document.body.innerHTML = html;
