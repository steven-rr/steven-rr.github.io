// let nav_mobile = document.getElementById("mobile-toggle");
// nav_mobile.style.opacity=  1;

// // remove nav main and social media from visibility.
// let nav_main = document.querySelector(".nav-main");
// let nav_social = document.querySelector(".social-media");
// nav_main.style.opacity = 0;
// nav_social.style.opacity = 0;



// // add nav-mobile child.
// const nav_mobile = document.createElement("nav_mobile");
// nav_mobile.style.opacity = 1;
// nav_mobile.innerHTML = `<ul>
// <li><a href = "https://www.facebook.com/stevenator9001/" > <i class="fa fa-facebook" aria-hidden="true"></i></a></li>
// <li><a href = "https://github.com/steven-rr" ><i class="fa fa-github" aria-hidden="true"></i></a></li>
// <li><a href = "https://www.linkedin.com/in/steven-rivadeneira" ><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
// <li> <a href = "https://www.instagram.com/steven__rr/" ><i class="fa fa-instagram" aria-hidden="true"></i></a> </li>
// </ul>`;

// let nav = document.querySelector("nav");
// val = nav;
// nav.appendChild(nav_mobile);


// // add fa-fa bars and styling to nav-mobile child.


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
{
    // add 0 opacity to main icons.
    //move social media icons
    // add fa-fabars.   
    let nav_mobile = document.getElementById("mobile-toggle");
    nav_mobile.style.opacity=  1;

    // remove nav main and social media from visibility.
    let nav_main = document.querySelector(".nav-main");
    let nav_social = document.querySelector(".social-media");
    nav_main.style.opacity = 0;
    nav_social.style.opacity = 0;
    
}