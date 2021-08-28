import React from 'react'
import HomeCSS from './Home.module.css'
import landingPagePic1 from '../landingPagePic1.JPG'

function Home() {
    return (
        <div className = {HomeCSS.containerMain}>
             <div className = {HomeCSS.primaryMsg}>
                <div className = {HomeCSS.headerClass}> Steven Rivadeneira </div>
                <div className = {HomeCSS.subtitleClass}>Engineer | Developer | Lifelong-learner </div>
                <button className= {HomeCSS.buttonClass}> Learn More</button>
             </div>
             <div className = {HomeCSS.primaryBGpic}>
                <img className = {HomeCSS.BGpic} src= {landingPagePic1}/>
             </div>
        </div>
    )
}

export default Home
