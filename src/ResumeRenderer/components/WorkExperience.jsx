import { useResume } from "../../context/ResumeContext";

export default function WorkExperience() {
    const { data, style } = useResume();
    if (!style.workExpe?.sideline) {
        return (
            <div className="workExperience" style={style?.workExpe?.box}>
                <h2 style={style?.workExpe?.heading}>Work Experience</h2>
                {data.experience.map((exp, index) => (
                    <div className="workPlace" key={index} style={style?.workExpe?.eachWorkPlace}>
                        <h3 style={style?.workExpe?.role}>{exp.Role}</h3>
                        <h4 style={style?.workExpe?.organization}> {exp.Organization}</h4>
                        <p style={style?.workExpe?.dates}>{exp.Location} | {exp["Start Date"]} - {exp["End Date"]}</p>
                        <ul style={style?.workExpe?.wholeList}>
                            {exp.Description.map((item, i) => <li key={i} style={style?.workExpe?.bullets}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
    else {
        return (
            <div className="workExperience" style={style?.workExpe?.box}>
                <h2 style={style?.workExpe?.heading}>Work Experience</h2>

                <div className="timeline" style={style?.workExpe?.timeline}>
                    {data.experience.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="dot" style={style?.workExpe?.dot}></div>
                            <div className="workPlace" style={style?.workExpe?.eachWorkPlace}>
                                <h3 style={style?.workExpe?.role}>{exp.Role}</h3>
                                <h4 style={style?.workExpe?.organization}>{exp.Organization}</h4>
                                <p style={style?.workExpe?.dates}>
                                    {exp.Location} | {exp["Start Date"]} - {exp["End Date"]}
                                </p>
                                <ul style={style?.workExpe?.wholeList}>
                                    {exp.Description.map((item, i) => (
                                        <li key={i} style={style?.workExpe?.bullets}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
