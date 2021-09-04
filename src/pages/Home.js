import React from 'react'
import HomeCSS from './Home.module.css'
import landingPagePic1 from '../landingPagePic1.JPG'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Home() {
    return (
        <div id="home" className = {HomeCSS.containerMain} >
             <div className = {HomeCSS.primaryMsg}>
                <div className = {HomeCSS.headerClass}> Steven Rivadeneira </div>
                <div className = {HomeCSS.subtitleClass}>Engineer | Developer | Lifelong-learner </div>
                <button className= {HomeCSS.buttonClass}> <Link to="timeline" spy={true} smooth={true} duration={700}>Learn More</Link></button>
             </div>
             <div className = {HomeCSS.primaryBGpic}>
                <img className = {HomeCSS.BGpic} src= {landingPagePic1}/>
             </div>
        </div>
    )
}

export default Home
