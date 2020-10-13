import React from 'react';
import '../../assets/css/Style.css';

export default function ExperienceCard(props) {
    return (
        <div className="experienceCard">
            <div className="experiencePicture"><p>Picture placeholder</p></div>
            <div className="experienceDescription">
                <p>{props.name}</p>
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}