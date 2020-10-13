import React from 'react';
import ExperienceCard from './subcomponents/ExperienceCard.js'
import '../assets/css/Style.css';

export default function Experience() {
    const workData = [
        {
            name: "Northwestern Mutual",
            title: "Software Engineer",
            description: "I do some stuff software stuff"
        },
        {
            name: "MD Logistics",
            title: "Business Intelligence Developer Intern",
            description: "I do some stuff BI stuff"
        },
    ]

    return (
        <div className="section" id="experience">
            <h1 className="sectionHeader">Here's my experiences so far</h1>
            <div className="experienceContainer">
                <ExperienceCard name="Northwestern Mutual" title="Software Engineer" description="i do some stuff"/>
            </div>
        </div>
    )
}