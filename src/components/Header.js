import React from 'react';
import logo from '../assets/img/logo.png'
import '../assets/css/Style.css';

export default function Header() {
    return (
        <div className="header">
            <div className="brand">
                <img className="logo" src={logo} alt="My logo!" />
                <h2>Jimmy Huang</h2>
            </div>
        </div>
    )
}