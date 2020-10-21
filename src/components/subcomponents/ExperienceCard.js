import React from 'react';
import '../../assets/css/Style.css';

export default function ExperienceCard(props) {
    return (
        <div className="experienceCard">
            <div className="experienceDescription">
                <h3><a href={props.link}>{props.name}</a></h3>
                <b>{props.title} {'//'} {props.time} </b>
                <p className="experienceDescription">{props.description}</p>
            </div>
        </div>
    )
}