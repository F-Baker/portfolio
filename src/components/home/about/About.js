import React from 'react';
import profilePic from "../../../assets/images/profile.jpg";
import "../../_common/common.css";
import "./about.css";

const About = () => {

    return (
        <div className="home-section container-about">
            <img className="profile-picture-about" alt="" src={profilePic}/>
            <div className="about-text">
                <span className="about-text-main">I'm <span className="about-name">Felix</span></span>
                <br/><span className="about-text-subtitle">I am a web developer and I work with Spring and React</span>
                <br/><br/>
                <br/><br/>Please have a look at my <a
                href="https://drive.google.com/file/d/1tYoImKw1bA_eDBfN8hm5BpwgkPARs22F/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"><span
                className="about-cv">resume</span></a> or scroll down to see my latest projects.
            </div>
        </div>
    );
};

export default About;
