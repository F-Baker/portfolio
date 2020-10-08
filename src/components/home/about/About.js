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
                <br/><br/>I'm looking for an internship for spring 2021
                <br/>Currently I'm learning web development with React and Spring.
                <br/><br/>Please have a look at my <a onClick={onLinkClick}
                                                      href="https://drive.google.com/file/d/1fnSo90RrJQdftAtCrwBVX_MW44LIKd-b/view?usp=sharing/"
                                                      target="_blank" rel="noopener noreferrer"><span
                className="about-cv">resume</span></a>
                <br/><br/>Scroll down to see my latest projects.
            </div>
        </div>
    );
}

export default About;
