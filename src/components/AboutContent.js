import "./AboutContentStyles.css"

import React from 'react'
import im1 from "../assets/linkedin.png"
import im2 from "../assets/cooking with edem.png"



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>My name is ADJOVI Edem I'm currently in my third year of general studies at EFREI Paris Panthéon-Assas Université.
             The next year I'm starting my first year of master in data and artificial intelligence. That's why I'm looking for a 24 months work-study program in Big Data for september 2024.</p>
            <div className="download-btn">
                <a className="btn" href="CV_ADJOVI_Edem.pdf" download="ADJOVI Edem CV (pdf)" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
        </div>

        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={im1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={im2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent