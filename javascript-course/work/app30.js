// looking at mouse events here: 
const clearBtn = document.querySelector(".clear-tasks");
const card     = document.querySelector(".card");
const heading = document.querySelector("h5");

//  Click 
// clearBtn.addEventListener('click', runEvent);
// Double Click
// clearBtn.addEventListener("dblclick", runEvent);
// Mousedown
// clearBtn.addEventListener("mousedown", runEvent);
// Mouse up
// clearBtn.addEventListener("mouseup", runEvent);
// // Mouseenter and mouseleave.
// card.addEventListener("mouseenter",runEvent); //only fires on initial parent element.
// card.addEventListener("mouseleave", runEvent); // only fires on initial parent element
// card.addEventListener("mouseover",runEvent);  // fires on any child element. 
// card.addEventListener("mouseout",runEvent);  //fires on any child element.

// mousemove
card.addEventListener("mousemove", runEvent); //use this whne it comes to games, or things that are interactive.



// Event Handler:
function runEvent(e)
{
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40 )`
}
