/* import { useResume } from "../../context/ResumeContext";
import EditableText from "../../Features/ResumeEditor/EditableText";
import SimpleEditableText from "../../Features/ResumeEditor/SimpleEditableText";

export default function PersonalInfo() {
    const { data, style } = useResume();

    const updatePlain = (field, value) => {
        data.personalInfo[field] = value;
    };

    const updateFormatted = (field, newFragments) => {
        data.personalInfo[field].fragments = newFragments;
    };

    return (
        <div className="personalInfo" style={style?.personalInfo?.box}>
            <h1 style={style?.personalInfo?.name}>
                <SimpleEditableText
                    text={data.personalInfo.firstName}
                    onChange={(v) => updatePlain("firstName", v)}
                />{" "}
                <SimpleEditableText
                    text={data.personalInfo.lastName}
                    onChange={(v) => updatePlain("lastName", v)}
                />
            </h1>
            <h3 style={style?.personalInfo?.position}>
                <SimpleEditableText
                    text={data.personalInfo.position}
                    onChange={(v) => updatePlain("position", v)}
                />
            </h3>
            <p style={style?.personalInfo?.summary}>
                <EditableText
                    fragments={data.personalInfo.summary.fragments}
                    onChange={(f) => updateFormatted("summary", f)}
                />
            </p>
        </div>
    );
}
 */

import { useResume } from "../../context/ResumeContext";
import EditableText from "../../Features/ResumeEditor/EditableText";
import SimpleEditableText from "../../Features/ResumeEditor/SimpleEditableText";

export default function PersonalInfo() {
    const { data, style } = useResume();

    const updatePlain = (field, value) => {
        data.personalInfo[field] = value;
    };

    const updateFormatted = (field, newFragments) => {
        data.personalInfo[field].fragments = newFragments;
    };

    return (
        <div className="personalInfo" style={style?.personalInfo?.box}>
            <h1 style={style?.personalInfo?.name}>
                <SimpleEditableText
                    text={data.personalInfo.firstName}
                    onChange={(v) => updatePlain("firstName", v)}
                />{" "}
                <SimpleEditableText
                    text={data.personalInfo.lastName}
                    onChange={(v) => updatePlain("lastName", v)}
                />
            </h1>
            <h3 style={style?.personalInfo?.position}>
                <SimpleEditableText
                    text={data.personalInfo.position}
                    onChange={(v) => updatePlain("position", v)}
                />
            </h3>
            <div style={style?.personalInfo?.summary}>
                <EditableText
                    fragments={data.personalInfo.summary.fragments}
                    onChange={(f) => updateFormatted("summary", f)}
                />
            </div>
        </div>
    );
}
