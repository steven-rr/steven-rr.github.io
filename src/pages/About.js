import React from 'react'
import AboutCSS from './About.module.css'
import verticalAboutPic from '../verticalAboutPic.JPG'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function About() {
    return (
        <div id="about" className = {AboutCSS.containerMain} >
             <div className = {AboutCSS.aboutPicContainer}>
                <img className = {AboutCSS.aboutPic} src= {verticalAboutPic}/>
             </div>
             <div className = {AboutCSS.primaryMsg}>
                <div className={AboutCSS.titleClass}>My passion and focus is engineering a better world</div>
                <p className={AboutCSS.paragraphText}> I am Steven Rivadeneira, born in Lima, Peru, raised in Miami, FL. I started my engineering career in Boston, MA, attending <a className= {AboutCSS.linkText} href="https://www.mit.edu">MIT</a> for my Bachelor's. Since then, I have spent many years in a variety of locations in the U.S building a variety of engineering projects, connecting with others, and trying to make a difference in the world. I am currently a AI/ML and Controls engineer at <a  className= {AboutCSS.linkText} href="https://www.lockheedmartin.com">Lockheed Martin</a>  where I develop control and computer vision algorithms for a variety of aircraft. </p>
                
                <p className={AboutCSS.paragraphText}> Most importantly, due to the obstacles my family and I once faced, I am passionate about helping others. Being an immigrant who has broken many barriers, I thrive in solving tough challenges that empower others and make the world a better place. My expertise in software includes a diverse set of technologies such as C++, Python, HTML/CSS, Javascript, React.JS, among others. </p>
                <p className={AboutCSS.paragraphText}> In my spare time, I enjoy side quests: writing, playing piano, running, and grinding for numerous video game titles.  </p>

    
              <Link to="contact" offset={-70} spy={true} smooth='easeInQuart'><button className= {AboutCSS.buttonClass}>Contact</button></Link>
             </div>
        </div>
    )
}

export default About
