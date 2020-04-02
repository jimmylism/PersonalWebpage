import React from 'react';
import logo from '../assets/img/logo.png'
import '../assets/css/Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="brand">
                <img className="logo" src={logo} alt="My logo!" />
                <h3>Jimmy Huang</h3>
            </div>
            <div className="headerList">
                <li className="nav-item">Home</li>
                <li className="nav-item">Experience</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </div>
        </div>
    )
}