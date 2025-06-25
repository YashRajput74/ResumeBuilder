import { useParams, useNavigate } from "react-router-dom";
import { templates } from "../data/templates";
import mockUserData from "../data/mockUserData";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function ResumePage() {

    const [editMode, setEditMode] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [data, setData] = useState(mockUserData);
    const [originalData, setOriginalData] = useState(null);
    const [user, setUser] = useState(null);

    const handleEdit = () => {
        setOriginalData(data);
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
        setSelectedSection(null);
        setOriginalData(null);
    };

    const handleCancel = () => {
        setData(originalData);
        setEditMode(false);
        setSelectedSection(null);
        setOriginalData(null);
    };


    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });
    }, []);
    const { templateId } = useParams();
    const template = templates.find(t => t.id === parseInt(templateId));
    const navigate = useNavigate();
    const resumeRef = useRef();

    if (!template) return <p>Template not found</p>;

    const handleDownload = () => {
        if (!user) {
            navigate("/auth");
            return;
        }

        const input = resumeRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("my-resume.pdf");
        });
    };

    const buttonStyle = {
        margin: "0.5rem",
        padding: "0.6rem 1.2rem",
        borderRadius: "5px",
        fontSize: "0.9rem",
        cursor: "pointer"
    };

    const editStyle = {
        ...buttonStyle,
        background: "#2ecc71",
        color: "#fff",
        border: "none"
    };

    const saveStyle = {
        ...buttonStyle,
        background: "#2980b9",
        color: "#fff",
        border: "none"
    };

    const cancelStyle = {
        ...buttonStyle,
        background: "#e74c3c",
        color: "#fff",
        border: "none"
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginBottom: "1rem",
                    padding: "0.5rem 1rem",
                    background: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                }}
            >
                ← Back to Templates
            </button>

            <div ref={resumeRef} style={{ margin: "2rem auto", width: "fit-content" }}>
                <ResumeRenderer
                    template={template}
                    data={data}
                    setData={setData}
                    editMode={editMode}
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}
                />

            </div>

            <button
                onClick={handleDownload} disabled={editMode}
                style={{
                    marginTop: "1.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#3498DB",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    opacity: editMode ? 0.6 : 1,
                    pointerEvents: editMode ? "none" : "auto"
                }}
            >
                Download PDF
            </button>
            {editMode ? (
                <>
                    <button
                        onClick={handleSave}
                        style={saveStyle}
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancel}
                        style={cancelStyle}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <button
                    onClick={handleEdit}
                    style={editStyle}
                >
                    Edit Mode
                </button>
            )}

        </div>
    );
}
