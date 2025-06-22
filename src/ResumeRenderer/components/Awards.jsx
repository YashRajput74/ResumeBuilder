import { useResume } from "../../context/ResumeContext";

export default function Awards() {
    const { data, style } = useResume();
    return (
        <div className="awards" style={style?.award?.box}>
            <h2 style={style?.award?.heading}>Honurs & Awards</h2>
            <div style={style?.award?.innerBox}>
                {data.award.map((awr, index) => {
                    return (
                        <div key={index} style={style?.award?.eachAward}>
                            <p style={style?.award?.title}>{awr.Title}</p>
                            <p style={style?.award?.date}>{awr.Date}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}