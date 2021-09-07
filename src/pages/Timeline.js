import React from 'react'
import TimelineCSS from './Timeline.module.css'
import TimelineItem from '../components/TimelineItem'
import LM_logo from '../LM_logo.png'
import MIT_logo from '../MIT_logo.png'
import GT_logo from '../GT_logo.svg.png'
import MDC_logo from '../MDC_logo.png'
import Binera_logo from '../binera_logo.png'
function Timeline() {
    return (
        <div id="timeline"  >
            <hr className={TimelineCSS.hrClass}></hr>
            <div className = {TimelineCSS.containerMain}>
                <div className={TimelineCSS.subcontainerMain}>
                    <div className={TimelineCSS.headerClass}>Timeline</div>
                    <TimelineItem
                    logoImg = {LM_logo}
                    companyName= "Lockheed Martin"
                    URL = "https://lockheedmartin.com"
                    positionName= "AI/ML Engineer"
                    startDate = "Summer 2021"
                    endDate = "Present"
                    bullets = {[
                        {
                            id: '0',
                            bullet: "Hyperparameter tuning of YOLOv4 using tensor flow RT and tensorboard for object detection"
                        },
                        {
                            id: '1',
                            bullet: "Lead feature detection trade study involving algorithms such as ORB, GFTT, SIFT, FAST, Harris Laplace."
                        }
                    ]}
                    multiplePositions= {true}
                    positionName2 = "Guidance Navigation & Control Engineer" 
                    startDate2 = "Fall 2019"
                    endDate2 = "Present"
                    bullets2 = {[
                        {
                            id: '1',
                            bullet: "Lead guidance navigation control standup for the hypersonic missiles: ARRW and TBG in C++ and Simulink."
                        },
                        {
                            id: '2',
                            bullet: "Lead ARRW software development of guidance and control algorithms in C++."
                        }
                    ]}
                    />
                    

                    <TimelineItem
                    logoImg = {Binera_logo}
                    companyName= "Binera"
                    URL = "https://binera.com"
                    positionName= "Aerospace Engineer | Data Analyst"
                    startDate = "Summer 2017"
                    endDate = "Spring 2019"
                    bullets = {[
                        {
                            id: '0',
                            bullet: "Sole developer of crew time model– data munge & analysis used to estimate crew time demands for Mars missions using Python and Pandas Library."
                        },
                        {
                            id: '1',
                            bullet: "Lead developer of logistics model – uses rates to calculate crew logistics requirements to the nearest kilogram"
                        }
                    ]}/>
                    
                    <TimelineItem
                    logoImg = {GT_logo}
                    companyName= "Georgia Institute of Technology"
                    URL = "https://gatech.edu"
                    positionName= "Master's of Science in Aerospace Engineering — Distance Learning"
                    startDate = "Fall 2019"
                    endDate = "Present"
                    bullets = {[
                        {
                            id: '0',
                            bullet: "Relevant Coursework: Deep Learning, Math Principles for Planning & Decision making for Autonomy, Nonlinear Controls, Networked Control"
                        },
                        {
                            id: '1',
                            bullet: "Class Projects in Deep Learning, Autonomy and Flight Controls"
                        }
                    ]}/>
                    <TimelineItem
                    logoImg = {MIT_logo}
                    companyName= "Massachusetts Institute of Technology"
                    URL = "https://mit.edu"
                    positionName= "Bachelor's of Science in Aerospace Engineering"
                    startDate = "Fall 2013"
                    endDate = "Spring 2017"
                    bullets = {[
                        {
                            id: '0',
                            bullet: "Relevant Coursework: Intro to Comp Sci, Feedback Control Systems, Automatic Control, Astrodynamics, Dynamics"
                        },
                        {
                            id: '1',
                            bullet: "Research done within Autonomy and Control lab, Space Propulsion Lab, and Senior Design in Structural UAV."
                        }
                    ]}/>
                </div>
            </div>
        </div>
    )
}
export default Timeline