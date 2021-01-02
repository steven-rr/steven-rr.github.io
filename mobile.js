// FINISH -- NAV BAR.
// take weekend to build out body. 

// NAV BAR: 
// TODO : fa-bar slider animation transition.
// TODO: hover text.
// UNIVERSAL: 
// TODO: Page transitions, fadeout. 
// TODO: Thinking page in between page transitions.


// STYLE:
// NAV BAR:
// Hover Text FONT style. 
// Hover Text FONT color.

//TODO: add graphics on mouse over icon. (sort of done, need to make more efficient)
//TODO: add fa-bars slider  (sort of done, somehow need to do a better animation here.)
//TODO: increase fa-bars slider size. (DONE)
//TODO: allow fa-bars slider when width is very small. (DONE)

var mobile_slider = document.getElementById("mobile-toggle");
mobile_slider.addEventListener("click", runNavClick);

var nav_ul = document.getElementById("navHover");

nav_li = nav_ul.children;

// MOBILE:
nav_li[0].children[0].addEventListener("click",runNavClick0);
// nav_li[0].children[0].addEventListener("mouseover",runNavHover0);
// nav_li[0].children[0].addEventListener("mouseout",runNavHoverRm0);

nav_li[1].children[0].addEventListener("click",runNavClick1);
// nav_li[1].children[0].addEventListener("mouseover",runNavHover1);
// nav_li[1].children[0].addEventListener("mouseout",runNavHoverRm1);


// WEB ONLY:
// nav_li[2].children[0].addEventListener("mouseover",runNavHover2);
// nav_li[2].children[0].addEventListener("mouseout",runNavHoverRm2);
// nav_li[3].children[0].addEventListener("mouseover",runNavHover3);
// nav_li[3].children[0].addEventListener("mouseout",runNavHoverRm3);
// nav_li[4].children[0].addEventListener("mouseover",runNavHover4);
// nav_li[4].children[0].addEventListener("mouseout",runNavHoverRm4);


function runNavClick0(e)
{
    let anchor = nav_li[0].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-home");
    if(e.persisted)
    {
        console.log("hello!");
        anchor.style.opacity ="1";
        anchor.classList.remove("text-about");
    }
}
function runNavClick1(e)
{
    let anchor = nav_li[1].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-about");
    if(e.persisted)
    {
        console.log("hello!");
        anchor.style.opacity ="1";
        anchor.classList.remove("text-about");
    }
}


// if user has clicked even amount of times, then show , else , don't show. 
var count = 0;
function runNavClick(e)
{
    nav_main = document.querySelector(".nav-main");
    if( (count % 2) === 0)
    {
        // nav_main.style.opacity = "1.0";
        nav_main.style.left = "0%"
        nav_main.style.display = "block";

        // console.log("here");
        // console.log(nav_main.style.opacity);
        // console.log(nav_main.style.left = "0%");

    }
    else
    {
        // nav_main.style.opacity = "0.0";
        nav_main.style.left = "100%"
        nav_main.style.display = "none";
    }

    e.preventDefault();
    count = count + 1;

}



function runNavHover0(e)
{
    let anchor = nav_li[0].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-home");
}
function runNavHoverRm0(e)
{
    let anchor = nav_li[0].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-home");
}

function runNavHover1(e)
{
    let anchor = nav_li[1].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-about");
}

function runNavHoverRm1(e)
{
    let anchor = nav_li[1].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-about");
}


function runNavHover2(e)
{
    let anchor = nav_li[2].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-skills");
}

function runNavHoverRm2(e)
{
    let anchor = nav_li[2].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-skills");
}

function runNavHover3(e)
{
    let anchor = nav_li[3].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-work");
}

function runNavHoverRm3(e)
{
    let anchor = nav_li[3].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-work");
}

function runNavHover4(e)
{
    let anchor = nav_li[4].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-contact");
}

function runNavHoverRm4(e)
{
    let anchor = nav_li[4].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-contact");
}