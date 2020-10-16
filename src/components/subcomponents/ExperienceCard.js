import React from 'react';
import '../../assets/css/Style.css';

export default function ExperienceCard(props) {
    return (
        <div className="experienceCard">
            <div className="experienceDescription">
                <h3>{props.name}</h3>
                <b>{props.title} | {props.time} </b>
                <p className="experienceDescription">{props.description}</p>
            </div>
        </div>
    )
}