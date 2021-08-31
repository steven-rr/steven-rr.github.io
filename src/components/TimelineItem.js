import React from 'react'
import TimelineItemCSS from './TimelineItem.module.css'
const TimelineItem = ({companyName, positionName, logoImg, startDate, endDate, sentence1, sentence2}) => {
    return (
        <div className={TimelineItemCSS.timelineItemContainer}>
            <div className={TimelineItemCSS.logoContainer}> 
                <img className = {TimelineItemCSS.logo} src= {logoImg}/>
            </div>
            <div className={TimelineItemCSS.textContainer}>
                <div className={TimelineItemCSS.titlePositionClass}> {positionName} </div>
                <div className={TimelineItemCSS.titleCompanyClass}> {companyName}</div>
                <div className={TimelineItemCSS.textClass}> {startDate} - {endDate} </div>
                <ul className={TimelineItemCSS.textClass}>
                    <li className={TimelineItemCSS.bulletPointClass}>{sentence1}</li>
                    <li className={TimelineItemCSS.bulletPointClass}>{sentence2}</li>
                </ul>
            </div>
        </div>
    )
}

export default TimelineItem
