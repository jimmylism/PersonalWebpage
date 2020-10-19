import React from 'react';
import '../assets/css/Style.css';
/* import headshot from '../assets/img/headshot.jpg' */

export default function About() {
    return (
        <div className="section" id="about">
            <h2 className="sectionHeader">A little more about me</h2>
            <div className="aboutContent">
                <div className="aboutText">
                    I'm graduating from <b>Indiana University</b> in 2020 with a degree in <b>Computer Science</b>. I am currently working as a <b>software engineer</b> at <a href="https://www.northwesternmutual.com/"><b>Northwestern Mutual</b></a>. My career goals include eventually joining / creating a startup or trying out product/project manager roles.
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    My <b>drive</b> is creating an <b>impact</b> in the community around me. I am constantly looking for opportunities to give back to the community and creating a difference for those who are less fortunate. Some of the ways that I try to make an impact are:
                    <br></br>
                    <br></br>
                    <li>Joining <a href="https://aaaiub.com/"><b>Asian American Association</b></a> as the <b>marketing director</b> to help foster a sense of Asian community in a state where Asian-Americans are traditionally under-represented</li>
                    <br></br>
                    <li>Offering mentorship to those looking to computer science in their academics and careers</li>
                    <br></br>
                    <li>Leading a team of four developers as a <b>program manager</b> for <a href="https://iustudentgovernment.indiana.edu/">Indiana University Student Government</a> to better assist the student body</li>
                </div>
                {/* <img src={headshot} className="headshot" /> */}
            </div>
        </div>
    )
}