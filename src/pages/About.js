import React from 'react'
import AboutCSS from './About.module.css'
import verticalAboutPic from '../verticalAboutPic.JPG'

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

    

                {/* <p className={AboutCSS.paragraphText}> I am Steven Rivadeneira, born in Lima, Peru, raised in Miami, FL. I have spent many years in a variety of locations in the U.S learning about technology, connecting with others, and trying to make a difference in the world.</p>

                <p className={AboutCSS.paragraphText}> Born to tinker, learning new things is a hobby. I enjoy side quests: writing, playing piano, running a 10k, and achieving Season 7 Diamond rank (top 1%) in League of Legends. Most importantly, due to the obstacles my family and I once faced, I am passionate about helping others. Being an immigrant who has broken many barriers, I thrive in solving tough challenges that empower others and make the world a better place.</p>

                <p className={AboutCSS.paragraphText}>I spent my college years in Boston, MA, pursuing a Bachelor's Degree in Aerospace Engineering from the Massachusetts Institute of Technology (MIT). I'm currently a Guidance Navigation and Control Engineer, developing algorithms in C++ for Lockheed Martin aircraft, while pursuing a Master's in Aerospace Engineering from Georgia Tech.</p> */}
                <button className= {AboutCSS.buttonClass}> Contact </button>
             </div>
        </div>
    )
}

export default About
