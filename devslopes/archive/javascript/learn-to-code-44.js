// picture the possible things we need to do from application perspective.
// user enters text into first and second textbox. when a submit button is clicked, needs to grab  info from first box, second box,
// then needs to run mathematical operation, then needs to spit result back out onto the screen. 
// easy to google some of these things. "how do i call a function from input submit button? " etc.


// create variable to store actual HTML object.
// document.getElementById();
// The moment we hit that <script> tag in our HTML file, we hit this line of code.
// once this happens, it's connected, and numfield1 is connected to the ID element. 
var numField1 = document.getElementById("numField1");
// want to make sure our variable actually has a reference. ".value" is how we reference the text.
// can modify input data field by using ".value". this proves that we can access HTML from here.
// numField1.value = "Hey Bob!";
var numField2 = document.getElementById("numField2");
var resultField= document.getElementById("resultField");
// somehow the code is going to need to display the result. 
numField1.value = "TEST"
// have to use innerText when it's not an input fields. 
resultField.innerText = "TEST"

// ".value" is a getter and a setter, you can get things from it, and set
// things from it. 
// we now know how to actually write code that interacts with code.
// have learned to link to HTML using javascript. 
// can check for fun if they're connected.
// resultField.value = numField1/numField2 * 100;
