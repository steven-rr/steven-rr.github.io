// // whenever a certain event happens, does whatever is specified by the function.
// document.querySelector(".clear-tasks").addEventListener("click", function(e)
// {
//     console.log("Hello World");
//     // e.preventDefault(); // can prevent default behavior by doing this.
// });

// // form will submit to a page, link will try to redirect somewhere else.


document.querySelector(".clear-tasks").addEventListener("mouseover", onClick);


function onClick(e)
{
    // console.log("Clicked");
    let val;

    val = e;

    // event target element. 
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText= "hello";

    // event type;
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // coords event relative to window:
    val = e.clientY;
    val = e.clientX;
    
    // coords event relative to element itself:
    val = e.offsetX;
    val = e.offsetY;

    console.log(val);

}
