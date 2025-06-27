import { useResume } from "../../context/ResumeContext";

export default function Skills() {
    const { data, style } = useResume();
    if (style.skills?.list) {
        return (
            <div className="skills" style={style?.skills?.box}>
                <h2 style={style?.skills?.heading}>Skills</h2>
                <ul style={style?.skills?.wholeList}>
                    {data.skills.map((skill, index) => <li key={index} style={style?.skills?.listItem}>{skill}</li>)}
                </ul>
            </div>
        )
    }
    else {
        return (
            <div className="skills" style={style?.skills?.box}>
                <h2 style={style?.skills?.heading}>Skills</h2>
                <div className="skillsGrid" style={style?.skills?.everySkillBox}>
                    {data.skills.map((skill, index) => <div key={index} style={style?.skills?.eachSkillBox}>{skill}</div>)}
                </div>
            </div>
        );
    }
}