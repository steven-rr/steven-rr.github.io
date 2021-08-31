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
        <div className = {TimelineCSS.containerMain}>
            <hr className={TimelineCSS.hrClass}></hr>

            <div className={TimelineCSS.subcontainerMain}>
                <div className={TimelineCSS.headerClass}>Timeline</div>
                <TimelineItem
                logoImg = {LM_logo}
                companyName= "Lockheed Martin"
                positionName= "AI/ML Engineer"
                startDate = "Summer 2021"
                endDate = "Present"
                sentence1 = "Hyperparameter tuning of YOLOv4 using tensor flow RT and tensorboard for object detection"
                sentence2 = "Lead feature detection trade study involving algorithms such as ORB, GFTT, SIFT, FAST, Harris Laplace."
                /> 
                <TimelineItem
                positionName= "Guidance Navigation & Control Engineer"
                startDate = "Spring 2019"
                endDate = "Present"
                sentence1 = "Lead guidance navigation control standup for the hypersonic missiles: ARRW and TBG in C++ and Simulink. "
                sentence2 = "Lead ARRW software development of guidance and control algorithms in C++."
                /> 
                <TimelineItem
                logoImg = {Binera_logo}
                companyName= "Binera"
                positionName= "Aerospace Engineer | Data Analyst"
                startDate = "Summer 2017"
                endDate = "Spring 2019"
                sentence1 = "Sole developer of crew time model– data munge & analysis used to estimate crew time demands for Mars missions using Python and Pandas Library."
                sentence2 = "Lead developer of logistics model – uses rates to calculate crew logistics requirements to the nearest kilogram"
                /> 
                <TimelineItem
                logoImg = {GT_logo}
                companyName= "Georgia Institute of Technology"
                positionName= "Master's of Science in Aerospace Engineering — Distance Learning"
                startDate = "Fall 2019"
                endDate = "Present"
                sentence1 = "Relevant Coursework: Deep Learning, Math Principles for Planning & Decision making for Autonomy, Nonlinear Controls, Networked Control "
                sentence2 = "Class Projects in Deep Learning, Autonomy and Flight Controls"
                /> 
                
                <TimelineItem
                logoImg = {MIT_logo}
                companyName= "Massachusetts Institute of Technology"
                positionName= "Bachelor's of Science in Aerospace Engineering"
                startDate = "Fall 2013"
                endDate = "Spring 2017"
                sentence1= "Relevant Coursework: Intro to Comp Sci, Feedback Control Systems, Automatic Control, Astrodynamics, Dynamics"
                sentence2= "Research done within Autonomy and Control lab, Space Propulsion Lab, and Senior Design in Structural UAV"
                /> 
           </div>
        </div>
    )
}
export default Timeline
