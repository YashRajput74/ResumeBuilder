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
        <div className="skills" style={style?.skills?.box}>
            <h2 style={style?.skills?.heading}>Skills</h2>
            <div className="individualSkill" style={style?.skills?.everySkillBox}>
                {data.skills.map((skill, index) => <div key={index} style={style?.skills?.eachSkillBox}>{skill}</div>)}
            </div>
        </div>
    );
}