import React from 'react'
import TimelineItemCSS from './TimelineItem.module.css'
const TimelineItem = ({companyName,URL,positionName, logoImg, startDate, endDate, bullets} ) => {
    return (
        <div className={TimelineItemCSS.timelineItemContainer}>
            <div className={TimelineItemCSS.logoContainer}> 
                <img className = {TimelineItemCSS.logo} src= {logoImg}/>
            </div>
            <div className={TimelineItemCSS.textContainer}>
                <div className={TimelineItemCSS.titlePositionClass}> {positionName} </div>
                <div className={TimelineItemCSS.titleCompanyClass}> <a className={TimelineItemCSS.linkText} href={URL}>{companyName}</a>,  {startDate} - {endDate} </div>
                <ul className={TimelineItemCSS.textClass}>
                    {bullets.map(item =>(
                        <li key={item.id}>
                            <div className= {TimelineItemCSS.bulletPointClass}>{item.bullet}</div>
                        </li>
                    ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default TimelineItem
