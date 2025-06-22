import { useResume } from "../../context/ResumeContext";

export default function Education() {
    const { data, style } = useResume();
    if (!style.education?.sideline) {
        return (
            <div className="education" style={style?.education?.box}>
                <h2 style={style?.education?.heading}>Education</h2>
                {data.education.map((edu, index) => (
                    <div className="school" key={index} style={style?.education?.eachSchool}>
                        <h3 style={style?.education?.name}>{edu.Degree} - {edu.School}</h3>
                        <p style={style?.education?.city}>{edu.City} | {edu["Start Date"]} - {edu["End Date"]}</p>
                        <p style={style?.education?.description}>{edu.Description}</p>
                    </div>
                ))}
            </div>
        );
    }
    else {
        return (
            <div className="education" style={style?.education?.box}>
                <h2 style={style?.education?.heading}>Education</h2>
                <div className="timeline" style={style?.education?.timeline}>
                    {data.education.map((edu, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="dot" style={style?.education?.dot}></div>
                            <div className="school" style={style?.education?.eachSchool}>
                                <h3 style={style?.education?.name}>{edu.Degree} - {edu.School}</h3>
                                <p style={style?.education?.city}>{edu.City} | {edu["Start Date"]} - {edu["End Date"]}</p>
                                <p style={style?.education?.description}>{edu.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
