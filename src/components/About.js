import React from 'react';
import '../assets/css/Style.css';

export default function About() {
    return (
        <div className="section" id="about">
            <h2 className="sectionHeader">A little more about me</h2>
            <div className="aboutText">
            <p>I'm graduating from <b>Indiana University</b> in 2020 with a degree in <b>Computer Science</b>. I am current working as a <b>software engineer</b> at <a href="https://www.northwesternmutual.com/"><b>Northwestern Mutual</b></a>. My career goals include eventually joining / creating a startup or trying out product/project manager roles.</p>

            <p>My <b>drive</b> is creating an <b>impact</b> in the community around me. I am constantly looking for opportunities to give back to the community and creating a difference for those who are less fortunate. During my time at Indiana University, I joined <a href="http://aaaiub.com/"><b>Asian American Association</b></a> as the <b>marketing director</b> to help foster a sense of Asian community in a state where Asian-Americans are traditionally underrepresented. Another way that I try to impact the community is offering mentorship to those looking to computer science in their academics and careers.</p>
            </div>

        </div>
    )
}