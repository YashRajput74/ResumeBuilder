export default function WorkExperience({ data }) {
    return (
        <div className="workExperience">
            <h2>Work Experience</h2>
            {data.experience.map((exp, index) => (
                <div className="workPlace" key={index}>
                    <h3>{exp.Role}</h3>
                    <h4> {exp.Organization}</h4>
                    <p>{exp.Location} | {exp["Start Date"]} - {exp["End Date"]}</p>
                    <ul>
                        {exp.Description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}
