import React from 'react';
import '../../assets/css/Style.css';

export default function ExperienceCard(props) {
    return (
        <div className="experienceCard">
            <div className="experienceDescription">
                <h3>{props.name}</h3>
                <p>{props.title} | {props.time} </p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}