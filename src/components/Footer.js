import React from 'react';
import '../assets/css/Style.css';

export default function Footer() {
    return (
        <div className="section" id="contact">
            <div className="footer">
                <h1 className="sectionHeader">Contact me</h1>
                <li><i className="far fa-envelope">: jimmy1999.huang@gmail.com</i></li>
                <li><i className="fas fa-phone-square-alt"></i>: (317) 496-4642</li>
                <li href="https://www.linkedin.com/in/jimmyhuang99/"><i className="fab fa-linkedin"></i>: https://www.linkedin.com/in/jimmyhuang99/</li>
                <li href="github.com"><i className="fab fa-github-square"></i></li><i className="fab fa-github-square"></i>
            </div>
        </div>
    )
}