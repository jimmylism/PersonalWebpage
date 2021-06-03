import React from 'react';
import '../assets/css/Style.css';
/* import headshot from '../assets/img/headshot.jpg' */

export default function About() {
    return (
        <div className="section" id="about">
            <h2 className="sectionHeader">A little more about me:</h2>
            <div className="aboutContent">
                <div className="aboutText">
                    <p>I'm graduated from <b>Indiana University</b> in 2020 with a degree in <b>Computer Science</b>. I am currently working as a <b>software engineer</b> at HP working on the <a href="https://instantink.hpconnected.com/us/en/l/"><b>Instant Ink</b></a> team. My career goals include eventually joining / founding a startup or trying out product / project manager roles.</p>
                    <p><b>Some of my hobbies include:</b></p>
                    <li className="hobbies">Traveling across the world <span role="img" aria-label="Airplane">✈️</span></li>
                    <p className="miniDescription">Some of the countries I visited include: ["<span className="orange">France"</span>, <span className="orange">"China"</span>, <span className="orange">"Canada"</span>, <span className="orange">"U.K."</span>]</p>
                    <li className="hobbies">Eating around the world <span role="img" aria-label="Fork plate knife">🍽️</span></li>
                    <p className="miniDescription">I enjoy food from all cultures (except <span className="bittermelon">bittermelon</span>) and try to recreate them in my kitchen</p>
                    <li className="hobbies">Reading about the world <span role="img" aria-label="Stack of books">📚</span></li>
                    <p className="miniDescription">Immersing myself in readings has allowed me to gain more perspective and empathy</p>
                </div>
                {/* <img src={headshot} className="headshot" /> */}
            </div>
        </div>
    )
}