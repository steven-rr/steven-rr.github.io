// lets look at window object. DOM is part of window object.
// window is global object in the client side javascript. 
//window methods / objects / properties

// console.log(123);

// 90's style web messaging: (if you want fancier, probably input something into HTML file, 
// as a pretty alert . )
// alert
// alert("Hello World");

// prompt:
// const input = prompt();
// alert(input);

// confirm:
// if(confirm(""))
// {
//     console.log("YES");
// }
// else
// {
//     console.log("NO");
// }

let val;

// For example, if i change the size of the window, i may want to do certain events.
// this is how i would go about doing that. 

// outerHeight(), outerWidth() - outer is from the outer edges.
val = window.outerHeight;
val = window.outerWidth;

// innerHeight(), innerWidth()
val = window.innerHeight;
val = window.innerWidth;

//  scroll points, so that you know WHEN to show animations. :
val = window.scrollX;
val = window.scrollY;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect.
// window.location.href = "http://google.com"; // sets location of page. 
// window.location.reload(); //reloads page.

// History object:
// window.history.go(-1); // takes you back to previous website, can use -2 to go back twice.
// val = window.history.length; //tells us length of our history.

// Navigator object -> can get many useful things, such as operating system, geolocation, 
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; //this is cool. can do "if it equals windows.. then do this, else if its mac, then do that."
val = window.navigator.vendor;
val = window.navigator.language; //can get language of browser.

console.log(val);

