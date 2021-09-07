import React from 'react'
import ProjectsCSS from './Projects.module.css'
import ProjectItem1 from '../components/ProjectItem1'
import ProjectItem2 from '../components/ProjectItem2'
import simpleSim from '../simpleSim.png'
import DL_project from '../DL_project.png'
import AI_project from '../AI_project.png'
import YOLOv4 from '../YOLOv4.png'
import LM_biglogo from '../LM_Biglogo.jpg'
import binera_biglogo from '../Binera_Biglogo.png'
import MIT_logo from '../MIT_logo.png'
import DL_Proj_PDF from "../StevenRiva_DL_Project.pdf"
import RL_Proj_PDF from "../StevenRiva_RL_Project.pdf"

function Projects() {
    return (
        <div id="projects">
            <hr className={ProjectsCSS.hrClass}></hr>
            <div className={ProjectsCSS.containerMain}>
                <div className={ProjectsCSS.subcontainerMain}>
                    <div className={ProjectsCSS.headerClass}>Projects</div>
                    <ProjectItem1
                    title= "C++ Simulation"
                    description= "Simulation of 6-DOF physics of UAV with self-designed flight controls"
                    bttnList={[
                        {
                            id: '0',
                            title: "Source Code",
                            link: "https://github.com/steven-rr/simple-sim"
                        }
                    ]}
                    image = {simpleSim}
                    />
                    <ProjectItem2
                    title= "Debunking Efficient Market Hypothesis"
                    description= "Using different deep learning architectures such as ResNet, VGG, AlexNet, RNN to find best stock market predictor and ultimately beat the market with 33% gain/year"
                    bttnList={[
                        {
                            id: '0',
                            title: "Paper",
                            link: DL_Proj_PDF,
                            downloadIn: "Steven_Riva_DL_Proj.pdf"
                        },
                        {
                            id: '1',
                            title: "Source Code",
                            link: "https://github.com/steven-rr/dlFinalProject"
                        }
                    ]}
                    image = {DL_project}
                    />
                    <ProjectItem1
                    title= "Reinforcement Learning based Control"
                    description= "Using Reinforcement Learning and Model Predictive Control to implement and control dynamical systems such as Linked Rotational Springs, Carts, and Electrical Circuits"
                    image = {AI_project}
                    bttnList={[
                        {
                            id: '0',
                            title: "Paper",
                            link: RL_Proj_PDF,
                            downloadIn: "Steven_Riva_RL_Proj.pdf"
                        },
                        {
                            id: '1',
                            title: "Source Code",
                            link: "https://github.com/steven-rr/AE8843"
                        }
                    ]}
                    />
                    <ProjectItem2
                    title= "Deep Learning for Object Detection"
                    description= "End-to-end training of YOLOv4 for object detection application. Trade study with various different feature detectors to explore alternative solutions."
                    image = {YOLOv4}
                    />
                    <ProjectItem1
                    title= "Lockheed Martin - GNC Engineer"
                    description= "Stand up C++ guidance and controls from inception of the program. Lead C++ development and testing of Guidance and Control algorithms. Support hardware in the loop testing. "
                    image = {LM_biglogo}
                    />
                    <ProjectItem2
                    title= "Binera - Aerospace Engineer"
                    description= "Lead data munge / classification of text data from ISS crew logs. Reliability engineering of parts, mean time before failure. "
                    image = {binera_biglogo}
                    bttnList={[
                        {
                            id: '0',
                            title: "Publication",
                            link: "https://ntrs.nasa.gov/api/citations/20190033167/downloads/20190033167.pdf"
                        }
                    ]}
                    />
                    <ProjectItem1
                    title= "Aerospace Engineering"
                    description= "Controls focused education. Projects done in Python, C++, MATLAB, Mathematica. Strong math focus across diverse areas such as Estimation Theory, Probability and Statistics, Calculus. "
                    image = {MIT_logo}
                    />
                    {/* <div className={ProjectsCSS.itemClass}>hi project items here, to be continued...</div> */}
                </div>
            </div>
        </div>
        
    )
}

export default Projects
