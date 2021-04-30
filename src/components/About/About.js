import React from 'react'
import './About.css'
import about from './about.jpeg'

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={about} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about us</h1>
                    <p className="about-text">
                        Founded by a group of highly motivated data scientists and software engineers within Beyond the Horizon ISSG, Horizon Lab serves as the general purpose digital enabler of the group both in its research and implementation areas. Core task of the lab is to transform group deliverables into data-driven products and contribute to the research with providing interdisciplinary insight using data and other digital tools. Horizon Lab supports and complements classic research with contemporary digital tools.
            </p>
                </div>
            </div>
        </div>
    )
}

export default About
