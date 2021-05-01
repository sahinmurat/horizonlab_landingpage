import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faDatabase, faFileCode,faTv,  faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FaMixcloud } from 'react-icons/fa';
import './Services.css'


const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Our services</h1>
      <div className="container">
        <div className="row">
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>
              <h3>Data Analysis</h3>
              <div className='subtitle'>
                <p>* Data Visualization</p>
                <p>* Exploratory Data Analysis</p>
                <p>* Labeling</p>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faBrain} size="2x" /></div>
              <h3>Artificial Intelligence</h3>
              <div className='subtitle'>
                <p></p>
                <p>* Machine Learning</p>
                <p>* Deep Learning</p>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faProductHunt} size="2x" /></div>
              <h3>Data Science Practices</h3>
              <div className='subtitle'>
                <p>* Hybrid Intelligence</p>
                <p>* Computational Social Science</p>
                <p>* Prediction</p>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Web Development</h3>
              <p></p>
              <p>Front-end/back-end software development</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FaMixcloud className="icon" icon={FaMixcloud} size="2x" /></div>

              <h3>Cloud Engineering</h3>
              <p></p>
              <p>Uptime IT is a provider of effective and certified hosting solutions - precisely tailored to your company</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faProjectDiagram} size="2x" /></div>

              <h3>Product Management</h3>
              <p></p>
              <p>Your service or product will appear at the top of the Google search</p>.
              </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faTv} size="2x" /></div>

              <h3>Digital Transformation</h3>
              <p></p>
              <p>Your service or product will appear at the top of the Google search</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
