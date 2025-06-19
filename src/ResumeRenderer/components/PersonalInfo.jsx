import { useResume } from "../../context/ResumeContext";

export default function PersonalInfo() {
    const { data, style } = useResume();
    return (
        <div className="personalInfo" style={style?.personalInfo?.box}>
            <h1 style={style?.personalInfo?.name}>{data.firstName} {data.lastName}</h1>
            <h3 style={style?.personalInfo?.position}>{data.position}</h3>
            <p style={style?.personalInfo?.summary}>{data.summary}</p>
        </div>
    );
}
