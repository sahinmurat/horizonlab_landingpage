import React from 'react'
import './Project.css'

function Project() {
    return (
        <div id="projects">
            <h2 className='project-title'>OUR PROJECTS</h2>
            <div className='project-wrapper'>
                <div className='project-image'>
                    <img src="https://www.ncia.nato.int/resources/uploads/1122/c-uas_37_2000-cu60p1.jpg" alt="drone" />
                </div>
                <div className='project-text'>
                    <h4>The NATO Communications and Information Agency (NCI Agency) is proud to announce the winners of its challenge focused on Unmanned Aerial Systems (UAS) data.</h4>
                    <p>The NCI Agency ran the challenge between February and May 2021, as a part of hosting the International Conference on Military Communications and Information Systems, or ICMCIS. This year's ICMCIS focused on the application of artificial intelligence and machine learning to the areas of military situational awareness and decision making.</p>
                    <p> <b>Horizon Lab: </b>  The Horizon team proposed an innovative solution based on machine learning, and although with less focus on challenges such as data association, track management or data fusion; their solution scored relatively high in the Mean Root Square Error (MRSE) parameter used in the ranking.</p>
                    <p>You can see the results... <a href="https://www.ncia.nato.int/about-us/newsroom/agency-announces-winners-of-drone-data-challenge.html" target='_blank'>Agency announces winners of drone data challenge</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project
