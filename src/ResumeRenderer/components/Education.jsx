import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
    const { data, style } = useResume();
    const education = data.education || [];

    const useCustomBullets = style?.education?.useCustomBullets ?? true;
    const bulletIcon = style?.education?.icon || faCircleCheck;

    return (
        <div className="education" style={style?.education?.box}>
            <h2 style={style?.education?.heading}>Education</h2>
            {education.map((edu, index) => (
                <div key={index} style={style?.education?.entryBox}>
                    <div style={style?.education?.titleRow}>
                        <h3 style={style?.education?.degree}>{edu.degree}</h3>
                        <span style={style?.education?.duration}>{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <div style={style?.education?.schoolCity}>
                        <span style={style?.education?.school}>{edu.school}</span>, <span style={style?.education?.city}>{edu.city}</span>
                    </div>

                    <ul style={style?.education?.list}>
                        {edu.description.map((desc, i) => (
                            <li key={i} style={style?.education?.listItem}>
                                {useCustomBullets && (
                                    <FontAwesomeIcon icon={bulletIcon} style={style?.education?.bulletIcon} />
                                )}
                                <span style={style?.education?.descriptionText}>
                                    {desc.fragments.map((frag, j) => (
                                        <span
                                            key={j}
                                            style={{
                                                fontWeight: frag.bold ? 'bold' : 'normal',
                                                fontStyle: frag.italic ? 'italic' : 'normal',
                                                textDecoration: frag.underline ? 'underline' : 'none'
                                            }}
                                        >
                                            {frag.text}
                                        </span>
                                    ))}
                                </span>
                            </li>

                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}