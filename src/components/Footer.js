import "./FooterStyles.css"

import React from 'react';

import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>16 rue de la Moskova 75018</p>
                        <p>Paris.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    +33 6 21 60 58 24</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    edemadjo03@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I'm a student in computer engineering 
                    and I'm searching for an alternance in Big Data.</p>
                <div className="social">
                <a href="https://www.linkedin.com/in/edem-adjovi-951b68221/" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} style={{ color:
                    "#fff", marginRight: "1rem"}} /></a>

                
                <a href="https://github.com/EdemAd" target="_blank" rel="noreferrer"><FaGithub size={30} style={{ color:
                    "#fff", marginRight: "1rem"}} /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer