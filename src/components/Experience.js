import React from 'react';
import ExperienceCard from './subcomponents/ExperienceCard.js'
import '../assets/css/Style.css';

export default function Experience() {
    const workData = [
        {
            name: "HP",
            title: "Full-stack software engineer",
            time: "Jan 2021 - Now",
            description: "Full-stack engineer on InstantInk team working on enrollment flow. ",
            link: "https://instantink.hpconnected.com/.com",
        },
        {
            name: "Northwestern Mutual",
            title: "Front-end software engineer",
            time: "Aug 2020 - Jan 2021",
            description: "Implemented and maintained features for a React-based enterprise software, including its microservices. Wrote tests using Jest and React Testing Library to ensure code coverage.",
            link: "https://northwesternmutual.com",
        },
        {
            name: "MD Logistics",
            title: "BI developer intern",
            time: "Jun 2020 - Aug 2020",
            description: "Developed automated reporting tool with 10+ KPIs to help executives with making business decisions. Automated weekly report generating process, slashing time spent on the process by over 90%.",
            link: "https://www.mdlogistics.com/",
        },
        {
            name: "Indiana University",
            title: "Research assistant",
            time: "Sep 2019 - Dec 2019",
            description: "Created data visualizations for the research on publications and citations of various C.S. fields. Documented and cleaned code as well as writing workflows so that researchers can replicate visualization results.",
            link: "https://luddy.indiana.edu/research/student-research/",
        },
        {
            name: "Bastian Solutions",
            title: "Software developer intern",
            time: "Jun 2019 - Aug 2019",
            description: "Developed back-end and front-end for a new documentation feature in a project-management software. Created sketches and mock-ups as a part of the design process.",
            link: "https://www.bastiansolutions.com/",
        },
    ]

    const leadershipData = [
        {
            name: "Indiana University Student Government",
            title: "Program manager",
            time: "Aug 2020 - Present",
            description: "Lead a team of four software engineers to develop applications that are beneficial to IUSG and the general student body while motivating and mentoring the juniors on unfamiliar technologies and their careers.",
            link: "https://iustudentgovernment.indiana.edu/",
        },
        {
            name: "Asian American Association @ Indiana University",
            title: "Marketing director",
            time: "Feb 2019 - May 2020",
            description: "Fostered a stronger Asian American community at Indiana University, increasing attendance of monthly meetings by over 30%. Coordinated the annual Indiana Asian American Conference with over 100 participants.",
            link: "https://aaaiub.com",
        },
    ]

    return (
        <div className="section" id="experience">
            <h2 className="sectionHeader">Where I've worked:</h2>
            <div className="experienceContainer">
                {workData.map((data, key) => {return (
                    <ExperienceCard key={key} name={data.name} title={data.title} time={data.time} description={data.description} />)})}
            </div>
            <h2 className="sectionHeader">I displayed leadership at:</h2>
            <div className="experienceContainer">
                {leadershipData.map((data, key) => {return (
                    <ExperienceCard key={key} name={data.name} title={data.title} time={data.time} description={data.description} />)})}
            </div>
        </div>
    )
}