import React from 'react'
import AboutCSS from './About.module.css'
import verticalAboutPic from '../verticalAboutPic.JPG'

function About() {
    return (
        <div className = {AboutCSS.containerMain}>
             <div className = {AboutCSS.aboutPicContainer}>
                <img className = {AboutCSS.aboutPic} src= {verticalAboutPic}/>
             </div>
             <div className = {AboutCSS.primaryMsg}>
                <h1 className={AboutCSS.h1}>My passion and focus is engineering a better world</h1>
                <p> I am Steven Rivadeneira, born in Lima, Peru, raised in Miami, FL. I have spent many years in a variety of locations in the U.S learning about technology, making friends, and trying to make a difference in the world.</p>

                   <p> Born to tinker, learning new things is a hobby. I also enjoy side quests: writing, running a 10k, and achieving Season 7 Diamond rank (top 1%) in League of Legends. Most importantly, due to the obstacles my family and I once faced, I am passionate about helping others. Being an immigrant who has broken many barriers, I thrive in solving tough challenges that empower others and make the world a better place.</p>

                    <p>I spent my college years in Boston, MA, pursuing a Bachelor's Degree in Aerospace Engineering from the Massachusetts Institute of Technology (MIT). I'm currently a Guidance Navigation and Control Engineer, developing algorithms in C++ for Lockheed Martin aircraft, while pursuing a Master's in Aerospace Engineering from Georgia Tech.
                </p>
                <button className= {AboutCSS.buttonClass}> Contact </button>
             </div>
        </div>
    )
}

export default About
