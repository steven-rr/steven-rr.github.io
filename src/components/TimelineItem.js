import React from 'react'
import TimelineItemCSS from './TimelineItem.module.css'
const TimelineItem = ({companyName, positionName, logoImg, startDate, endDate, sentence1, sentence2}) => {
    return (
        <div className={TimelineItemCSS.timelineItemContainer}>
            <div className={TimelineItemCSS.logoContainer}> 
                <img className = {TimelineItemCSS.logo} src= {logoImg}/>
            </div>
            <div className={TimelineItemCSS.textContainer}>
                <div className={TimelineItemCSS.textClass}> {companyName}</div>
                <div className={TimelineItemCSS.textClass}> {positionName} </div>
                <div className={TimelineItemCSS.textClass}> {startDate} - {endDate} </div>
                <ul className={TimelineItemCSS.textClass}>
                    <li>{sentence1}</li>
                    <li>{sentence2}</li>
                </ul>
            </div>
        </div>
    )
}

export default TimelineItem
