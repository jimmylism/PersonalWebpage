import React from 'react';
import ExperienceCard from './subcomponents/ExperienceCard.js'
import '../assets/css/Style.css';

export default function Experience() {
    return (
        <div className="section" id="experience">
            <h1 className="sectionHeader">Here's my experiences so far</h1>
            <ExperienceCard></ExperienceCard>
        </div>
    )
}