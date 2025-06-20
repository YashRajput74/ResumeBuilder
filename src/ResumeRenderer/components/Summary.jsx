import { useResume } from "../../context/ResumeContext"

export default function Summary() {
    const { data, style } = useResume();

    return (
        <div className="summary" style={style?.summary?.box}>
            <h2 style={style?.summary?.heading}>Summary</h2>
            <p style={style?.summary?.content}>{data.summary}</p>
        </div>
    )
}