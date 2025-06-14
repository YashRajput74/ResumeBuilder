import { useParams, useNavigate } from "react-router-dom";
import { templates } from "./data/templates";
import mockUserData from "./data/mockUserData";
import ResumeRenderer from "./ResumeRenderer/ResumeRenderer";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumePage() {
    const { templateId } = useParams();
    const template  = templates.find(t => t.id === parseInt(templateId));
    const navigate = useNavigate();
    const resumeRef = useRef();

    if (!template) return <p>Template not found</p>;

    const handleDownload = () => {
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
                <ResumeRenderer template={template} data={mockUserData} />
            </div>

            <button
                onClick={handleDownload}
                style={{
                    marginTop: "1.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#3498DB",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    cursor: "pointer",
                }}
            >
                Download PDF
            </button>
        </div>
    );
}




/* 
import { useParams, useNavigate } from "react-router-dom";
import { templates } from "./data/templates";
import mockUserData from "./data/mockUserData";
import ResumeRenderer from "./ResumeRenderer/ResumeRenderer";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function ResumePage() {
    const { templateId } = useParams();
    const template = templates[templateId];
    const navigate = useNavigate();
    const resumeRef = useRef();

    if (!template) return <p>Template not found</p>;

    const handleDownload = () => {
        const input = resumeRef.current;
        const fullName = mockUserData.personalInfo?.fullName || "my-resume";

        const opt = {
            margin: 0,
            filename: `${fullName}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(opt).from(input).save();
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
                <ResumeRenderer template={template} data={mockUserData} />
            </div>

            <button
                onClick={handleDownload}
                style={{
                    marginTop: "1.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#3498DB",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    cursor: "pointer",
                }}
            >
                Download PDF
            </button>
        </div>
    );
}
*/