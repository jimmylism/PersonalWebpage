import React from 'react';
import ExperienceCard from './subcomponents/ExperienceCard.js'
import '../assets/css/Experience.css';

export default function Experience() {
    return (
        <div className="section">
            <div className="experience">
                <h1 className="sectionHeader">Here's my experiences so far</h1>
                <ExperienceCard></ExperienceCard>
            </div>
        </div>
    )
}