import { useResume } from "../../context/ResumeContext";
import SimpleEditableText from "../../Features/ResumeEditor/SimpleEditableText";
import EditableText from "../../Features/ResumeEditor/EditableText";

export default function PersonalInfo({ editMode }) {
    const { data, updateField, style } = useResume();

    const personal = data.personalInfo;

    return (
        <div className="personalInfo" style={style?.personalInfo?.box}>
            <h1 style={style?.personalInfo?.name}>
                {editMode ? (
                    <>
                        <SimpleEditableText
                            text={personal.firstName}
                            onChange={(v) => updateField("personalInfo", "firstName", v)}
                        />{" "}
                        <SimpleEditableText
                            text={personal.lastName}
                            onChange={(v) => updateField("personalInfo", "lastName", v)}
                        />
                    </>
                ) : (
                    `${personal.firstName} ${personal.lastName}`
                )}
            </h1>

            <h3 style={style?.personalInfo?.position}>
                {editMode ? (
                    <SimpleEditableText
                        text={personal.position}
                        onChange={(v) => updateField("personalInfo", "position", v)}
                    />
                ) : (
                    personal.position
                )}
            </h3>

            <div style={style?.personalInfo?.summary}>
                {editMode ? (
                    <EditableText
                        fragments={personal.summary?.fragments || []}
                        onChange={(f) => updateField("personalInfo", "summary.fragments", f)}
                    />
                ) : (
                    (personal.summary?.fragments || []).map((frag, i) => (
                        <span
                            key={i}
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
            </div>

        </div>
    );
}
