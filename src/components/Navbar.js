import React from 'react'
import NavbarCSS from './Navbar.module.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <div className={NavbarCSS.containerMain}>
                {/* <div className={NavbarCSS.navHome}> */}
                    {/* HOME */}
                    {/* <Link to="/"  className="nav-SR-icon-a">
                        <img className="nav-SR-icon-img" src={SRicon}/>  
                    </Link>      */}
                {/* </div> */}

                <div className={NavbarCSS.navMain}>
                        <Link to="about" href="#" spy={true} smooth={true}>ABOUT</Link>
                </div>
                <div  id="hey" className={NavbarCSS.herro}>
                    <div>
                        herro
                    </div>
                </div>
        </div>
    )
}

export default Navbar
