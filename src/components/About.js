import React from 'react';
import '../assets/css/Style.css';
import profilePicture from '../assets/img/logo.png'

export default function About() {
    return (
        <div className="section" id="about">
            <h2 className="sectionHeader">A little more about me</h2>
            <div className="aboutbody">
                <div className="aboutText">
                    <p className="aboutMe">My <b>drive</b> is creating an <b>impact</b> in the community around me. </p>
                    <p className="aboutMe">I'm graduating from Indiana University in 2020 with a degree in Computer Science. I currently work for Northwestern Mutual as a software engineer. I would love to eventually join/create a startup or try out product/project manager roles.</p>
                </div>
                <div className="aboutPic">
                    
                </div>
            </div>
        </div>
    )
}