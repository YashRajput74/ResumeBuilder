/* export default function Skills({ data }) {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </div>
    );
} */

import { useResume } from "../../context/ResumeContext";

export default function Skills() {
    const {data, style}= useResume();
    return (
        <div className="skills">
            <h2 style={{textAlign: style.heading.alignment, textDecoration: style.heading.decoration}}>Skills</h2>
            <div className="individualSkill">
                {data.skills.map((skill, index) => <div key={index}>{skill}</div>)}
            </div>
        </div>
    );
}