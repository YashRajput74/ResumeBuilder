import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function WorkExperience() {
    const { data, style } = useResume();
    const workExperience = data.workExperience || [];

    const bulletIcon = style?.workExperience?.icon;
    const useCustomBullets = style?.workExperience?.useCustomBullets ?? true;

    return (
        <div className="workExperience" style={style?.workExperience?.box}>
            <h2 style={style?.workExperience?.heading}>Work Experience</h2>

            {workExperience.map((job, index) => (
                <div key={index} style={style?.workExperience?.jobBox}>
                    <div style={style?.workExperience?.titleBox}>
                        <h3 style={style?.workExperience?.role}>{job.role}</h3>
                        <span style={style?.workExperience?.orgLoc}>
                            {job.organization} — {job.location}
                        </span>
                        <span style={style?.workExperience?.dates}>
                            {job.startDate} – {job.endDate}
                        </span>
                    </div>

                    <ul
                        style={{
                            ...style?.workExperience?.list,
                            listStyle: useCustomBullets ? 'none' : 'disc',
                            paddingLeft: useCustomBullets ? '0' : '1.25rem',
                        }}
                    >
                        {job.description.map((desc, i) => (
                            <li key={i} style={style?.workExperience?.listItem}>
                                {useCustomBullets && (
                                    <FontAwesomeIcon
                                        icon={bulletIcon}
                                        style={style?.workExperience?.bulletIcon}
                                    />
                                )}
                                {desc.fragments.map((frag, j) => (
                                    <span
                                        key={j}
                                        style={{
                                            fontWeight: frag.bold ? 'bold' : 'normal',
                                            fontStyle: frag.italic ? 'italic' : 'normal',
                                            textDecoration: frag.underline ? 'underline' : 'none',
                                            ...style?.workExperience?.fragment,
                                        }}
                                    >
                                        {frag.text}
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}