import React from 'react';
import '../../assets/css/Style.css';

export default function ExperienceCard(props) {
    return (
        <div className="experienceCard">
            <div className="experienceDescription">
                <h2>{props.name}</h2>
                <p>{props.title} | {props.time} </p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}