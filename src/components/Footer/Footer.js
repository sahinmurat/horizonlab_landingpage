import React from "react";
import './Footer.css'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex part">
              <p>Da Vincilaan 1, 1932 Zaventem, Belgium</p>
            </div>
            <div className="d-flex part">
              <a href="tel:+32 (0) 2 801 13 57-58">+32 (0) 2 801 13 57-58</a>
            </div>
            <div className="d-flex part">
              <p>info@horizonlab.tech</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link className="footer-nav" smooth={true} to="home" offset={-110}  >Home Page <span className="sr-only">(current)</span></Link>
                <br />
                <Link className="footer-nav " smooth={true} to="about" offset={-110} >About Us</Link>
                <br />
              </div>
              <div className="col">
                <Link smooth={true} to="services" offset={-110} className="footer-nav " href="#">Areas</Link>
                <br />
                <Link smooth={true} to="contacts" offset={-110} className="footer-nav " >Contact</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center part">
              <FacebookShareButton
                url={"https://www.facebook.com/BehorizonOrg/"}
                quote={"BehorizonOrg"}
                hashtag="#BehorizonOrg"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://twitter.com/BehorizonOrg"}
                quote={"BeHorizonOrg"}
                hashtag="#BeHorizonOrg"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/company/beyondthehorizon/"}
                quote={"BeHorizonOrg"}
                hashtag="#BeHorizonOrg"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;HorizonLab | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
