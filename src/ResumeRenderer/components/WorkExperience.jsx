import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import EditableText from "../../Features/ResumeEditor/EditableText";
import SimpleEditableText from "../../Features/ResumeEditor/SimpleEditableText";

export default function WorkExperience({ editMode }) {
    const { data, style } = useResume();
    const workExperience = data.workExperience || [];

    const bulletIcon = style?.workExperience?.icon || faBriefcase;
    const useCustomBullets = style?.workExperience?.useCustomBullets ?? true;

    const updatePlain = (index, field, value) => {
        data.workExperience[index][field] = value;
    };

    const updateDescription = (jobIndex, descIndex, newFragments) => {
        data.workExperience[jobIndex].description[descIndex].fragments = newFragments;
    };

    return (
        <div className="workExperience" style={style?.workExperience?.box}>
            <h2 style={style?.workExperience?.heading}>Work Experience</h2>

            {workExperience.map((job, index) => (
                <div key={index} style={style?.workExperience?.jobBox}>
                    <div style={style?.workExperience?.titleBox}>
                        <h3 style={style?.workExperience?.role}>
                            {editMode ? (
                                <SimpleEditableText
                                    text={job.role}
                                    onChange={(v) => updatePlain(index, "role", v)}
                                />
                            ) : job.role}
                        </h3>

                        <span style={style?.workExperience?.orgLoc}>
                            {editMode ? (
                                <>
                                    <SimpleEditableText
                                        text={job.organization}
                                        onChange={(v) => updatePlain(index, "organization", v)}
                                    />{" "}
                                    —{" "}
                                    <SimpleEditableText
                                        text={job.location}
                                        onChange={(v) => updatePlain(index, "location", v)}
                                    />
                                </>
                            ) : (
                                `${job.organization} — ${job.location}`
                            )}
                        </span>

                        <span style={style?.workExperience?.dates}>
                            {editMode ? (
                                <>
                                    <SimpleEditableText
                                        text={job.startDate}
                                        onChange={(v) => updatePlain(index, "startDate", v)}
                                    />{" "}
                                    –{" "}
                                    <SimpleEditableText
                                        text={job.endDate}
                                        onChange={(v) => updatePlain(index, "endDate", v)}
                                    />
                                </>
                            ) : (
                                `${job.startDate} – ${job.endDate}`
                            )}
                        </span>
                    </div>

                    <ul
                        style={{
                            ...style?.workExperience?.list,
                            listStyle: useCustomBullets ? "none" : "disc",
                            paddingLeft: useCustomBullets ? "0" : "1.25rem",
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
                                {editMode ? (
                                    <EditableText
                                        fragments={desc.fragments}
                                        onChange={(f) => updateDescription(index, i, f)}
                                    />
                                ) : (
                                    desc.fragments.map((frag, j) => (
                                        <span
                                            key={j}
                                            style={{
                                                fontWeight: frag.bold ? "bold" : "normal",
                                                fontStyle: frag.italic ? "italic" : "normal",
                                                textDecoration: frag.underline ? "underline" : "none"
                                            }}
                                        >
                                            {frag.text}
                                        </span>
                                    ))
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
