import React from 'react';

import profilePic from "../../../assets/images/profile.jpg";

import "../../_common/common.css";
import "./about.css";

import ReactGA from 'react-ga';

const About = () => {

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on CV'
        });
    }

    return (
        <div className="home-section container-about">
            <img className="profile-picture-about" alt="profilepic" src={profilePic}/>
            <div className="about-text">
                <span className="about-text-main">I'm <span className="about-name">Felix</span></span>
                <br/><span className="about-text-subtitle">I am a software developer studying in Palaiseau</span>
                <br/><br/>I'm currently enrolled in a bachelor's program, Concepteur Devéloppeur d'Applications (Niveau 6) and I'm looking for an internship for spring 2021
                <br/><br/> I'm learning web development with React and Spring.  This website is built with React, hosted via firebase.  It will soon to feature automated deployment and analytics!
                <br/><br/>Please have a look at my <a onClick={onLinkClick}
                                                      href="https://drive.google.com/file/d/1mCYX-CM9UVyEtHLFzim2LwfY1kSzPDpq/view?usp=sharing/"
                                                      target="_blank" rel="noopener noreferrer"><span
                className="about-cv">resume</span></a> or scroll down to see my latest projects.
            </div>
        </div>
    );
}

export default About;
