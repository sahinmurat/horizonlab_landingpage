import React from 'react'
import Typed from "react-typed";
import { Link } from "react-scroll";
import './Header.css'
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <Navbar/>
            <div className="main-info">
            <canvas></canvas>
                <h1 className='title'>You are at the right address here... </h1>
               
                <Typed
                    className="typed-text"
                    strings={["Data Visualization", "Machine Learning", "Deep Learning", "Hybrid Intelligence", "Ceza Hukuku", "Cloud engineering", "Digitalisation"]}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />
                <Link id="contact" smooth={true} to="contacts" offset={-110} className="btn-main-offer">Contact</Link>
            </div>
        </div>
    )
}

export default Header
