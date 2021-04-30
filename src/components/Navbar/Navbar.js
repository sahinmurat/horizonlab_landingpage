import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="#" to="home" smooth={true}
                            offset={-110} >Homepage<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="about" smooth={true}
                            offset={-110} >About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="services" smooth={true}
                            offset={-110} >Areas of Interest</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" smooth={true}
                            offset={-110} >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="contacts" smooth={true}
                            offset={-110} >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
