import React from 'react';
import ExperienceCard from './subcomponents/ExperienceCard.js'
import '../assets/css/Style.css';

export default function Experience() {
    const workData = [
        {
            name: "Northwestern Mutual",
            title: "Software engineer",
            time: "Aug 2020 - Present",
            description: "I do some software stuff"
        },
        {
            name: "MD Logistics",
            title: "BI developer intern",
            time: "Jun 2020 - Aug 2020",
            description: "I do some BI stuff"            
        },
        {
            name: "Bastian Solutions",
            title: "Software developer intern",
            time: "Jun 2019 - Aug 2019",
            description: "I do some software stuff"            
        },
    ]

    const leadershipData = [
        {
            name: "Indiana University Student Government",
            title: "Program Manager",
            time: "Aug 2020 - Present",
            description: "I do some PM stuff"
        },
        {
            name: "Indiana University",
            title: "Research Assistant",
            time: "Sep 2019 - Dec 2019",
            description: "I do some research stuff"            
        },
        {
            name: "Asian American Association @ Indiana University",
            title: "Marketing director",
            time: "Feb 2019 - May 2020",
            description: "I do some marketing stuff"            
        },
    ]

    return (
        <div className="section" id="experience">
            <h2 className="sectionHeader">Here's what I've been up to</h2>
            <div className="experienceContainer">
                {workData.map((data, key) => {return (
                    <ExperienceCard key={key} name={data.name} title={data.title} time={data.time} description={data.description} />)})}
            </div>
            <h2 className="sectionHeader">Some of my leadership & volunteer experience</h2>
            <div className="leadershipContainer">
                {leadershipData.map((data, key) => {return (
                    <ExperienceCard key={key} name={data.name} title={data.title} time={data.time} description={data.description} />)})}
            </div>
        </div>
    )
}