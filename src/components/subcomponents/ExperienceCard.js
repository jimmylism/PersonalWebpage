import React from 'react';
import '../../assets/css/ExperienceCard.css';

export default function ExperienceCard() {
    return (
        <div className="experienceCard">
            <div className="experiencePicture"><p>Picture placeholder</p></div>
            <div className="experienceDescription">
                <p>Experience name</p>
                <p>Position title</p>
                <p>Description</p>
            </div>
        </div>
    )
}