import { useResume } from "../../context/ResumeContext";

export default function PersonalInfo() {
    const { data, style } = useResume();
    return (
        <div className="personalInfo">
            <h1 style={{ color: style.heading.color }}>{data.name}</h1>
            <p style={{ color: style.content.color }}>{data.summary}</p>
        </div>
    );
}
