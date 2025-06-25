import { useEffect, useRef } from "react";
import { useResume } from "../../context/ResumeContext";

export default function Summary() {
    const { data, setData, style, editMode, selectedSection, setSelectedSection } = useResume();
    const isSelected = selectedSection === "summary";

    const headingRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (editMode && isSelected) {
            if (
                headingRef.current &&
                headingRef.current.innerText !== (data.summaryHeading || style?.summary?.headingText || "Summary")
            ) {
                headingRef.current.innerText = data.summaryHeading || style?.summary?.headingText || "Summary";
            }

            if (
                contentRef.current &&
                contentRef.current.innerHTML !== data.summary
            ) {
                contentRef.current.innerHTML = data.summary;
            }
        }
    }, [editMode, isSelected, data.summary, data.summaryHeading]);

    return (
        <div
            className="summary"
            onClick={() => {
                if (editMode) setSelectedSection("summary");
            }}
            style={{
                ...style?.summary?.box,
                outline: "none",
                border: "none",
                backgroundColor: editMode && isSelected ? "#F5F5F5" : "transparent",
                borderRadius: "4px",
                cursor: editMode ? "pointer" : "default"
            }}
        >
            {editMode && isSelected ? (
                <>
                    <h2
                        ref={headingRef}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={() => {
                            const updatedHeading = headingRef.current.innerText;
                            setData(prev => ({ ...prev, summaryHeading: updatedHeading }));
                        }}
                        style={{ ...style?.summary?.heading, outline: "none" }}
                    />

                    <div
                        ref={contentRef}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={() => {
                            const updatedContent = contentRef.current.innerHTML;
                            setData(prev => ({ ...prev, summary: updatedContent }));
                        }}
                        style={{
                            ...style?.summary?.content,
                            outline: "none"
                        }}
                    />
                </>
            ) : (
                <>
                    <h2 style={style?.summary?.heading}>
                        {data.summaryHeading || style?.summary?.headingText || "Summary"}
                    </h2>
                    <p
                        style={style?.summary?.content}
                        dangerouslySetInnerHTML={{ __html: data.summary }}
                    />
                </>
            )}
        </div>
    );
}