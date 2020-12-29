//TODO: add graphics on mouse over icon. (sort of done, need to make more efficient)
//TODO: add fa-bars slider  (sort of done, somehow need to do a better animation here.)
//TODO: increase fa-bars slider size. (DONE)
//TODO: allow fa-bars slider when width is very small. (DONE)

var mobile_slider = document.getElementById("mobile-toggle");
mobile_slider.addEventListener("click", runNavClick);

var nav_ul = document.getElementById("navHover");

nav_li = nav_ul.children;


nav_li[0].children[0].addEventListener("mouseover",runNavHover0);
nav_li[0].children[0].addEventListener("mouseout",runNavHoverRm0);
nav_li[1].children[0].addEventListener("mouseover",runNavHover1);
nav_li[1].children[0].addEventListener("mouseout",runNavHoverRm1);
nav_li[2].children[0].addEventListener("mouseover",runNavHover2);
nav_li[2].children[0].addEventListener("mouseout",runNavHoverRm2);
nav_li[3].children[0].addEventListener("mouseover",runNavHover3);
nav_li[3].children[0].addEventListener("mouseout",runNavHoverRm3);
nav_li[4].children[0].addEventListener("mouseover",runNavHover4);
nav_li[4].children[0].addEventListener("mouseout",runNavHoverRm4);





// if user has clicked even amount of times, then show , else , don't show. 
var count = 0;
function runNavClick(e)
{
    nav_main = document.querySelector(".nav-main");
    console.log("hello");
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
    console.log("hello");
    let anchor = nav_li[0].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-home");
    runNavHoverRm1();
    runNavHoverRm2();
    runNavHoverRm3();
    runNavHoverRm4();

}
function runNavHoverRm0(e)
{
    console.log("hello");
    let anchor = nav_li[0].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-home");
}

function runNavHover1(e)
{
    console.log("hello");
    let anchor = nav_li[1].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-about");
    runNavHoverRm0();
    runNavHoverRm2();
    runNavHoverRm3();
    runNavHoverRm4();
}

function runNavHoverRm1(e)
{
    console.log("hello");
    let anchor = nav_li[1].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-about");
}


function runNavHover2(e)
{
    console.log("hello");
    let anchor = nav_li[2].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-skills");
    runNavHoverRm0();
    runNavHoverRm1();
    runNavHoverRm3();
    runNavHoverRm4();
}

function runNavHoverRm2(e)
{
    console.log("hello");
    let anchor = nav_li[2].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-skills");
}

function runNavHover3(e)
{
    console.log("hello");
    let anchor = nav_li[3].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-work");
    runNavHoverRm0();
    runNavHoverRm1();
    runNavHoverRm2();
    runNavHoverRm4();
}

function runNavHoverRm3(e)
{
    console.log("hello");
    let anchor = nav_li[3].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-work");
}

function runNavHover4(e)
{
    console.log("hello");
    let anchor = nav_li[4].children[0];
    anchor.style.opacity ="0";
    anchor.classList.add("text-contact");
    runNavHoverRm0();
    runNavHoverRm1();
    runNavHoverRm2();
    runNavHoverRm3();
}

function runNavHoverRm4(e)
{
    console.log("hello");
    let anchor = nav_li[4].children[0];
    anchor.style.opacity ="1";
    anchor.classList.remove("text-contact");
}