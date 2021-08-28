import React from 'react'
import HomeCSS from './Home.module.css'
import landingPagePic1 from '../landingPagePic1.JPG'

function Home() {
    return (
        <div className = {HomeCSS.containerMain}>
             <div className = {HomeCSS.primaryMsg}>
                <h1>Steven Rivadeneira</h1>
             </div>
             <div className = {HomeCSS.primaryBGpic}>
                <img className = {HomeCSS.BGpic} src= {landingPagePic1}/>
             </div>
        </div>
    )
}

export default Home
