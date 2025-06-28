import { useResume } from "../../context/ResumeContext";

export default function PersonalInfo() {
    const { data, style } = useResume();
    return (
        <div className="personalInfo" style={style?.personalInfo?.box}>
            <h1 style={style?.personalInfo?.name}>{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
            <h3 style={style?.personalInfo?.position}>{data.personalInfo.position}</h3>
            <p style={style?.personalInfo?.summary}>
                {data.personalInfo.summary.fragments.map((frag, i) => (
                    <span key={i} style={{
                        fontWeight: frag.bold ? "bold" : "normal",
                        fontStyle: frag.italic ? "italic" : "normal",
                        textDecoration: frag.underline ? "underline" : "none"
                    }}>
                        {frag.text}
                    </span>
                ))}
            </p>
        </div>
    );
}
