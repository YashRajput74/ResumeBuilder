import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import "./ResumeRenderer.css";
import Contact from "./components/Contact";
import Strengths from "./components/Strengths";
import Achievements from "./components/Achievements";
import Summary from "./components/Summary";
import { ResumeContext } from "../context/ResumeContext";
import templateStyles from "../data/templateStyles";
import Organizations from "./components/Organizations";
import Avatar from "./components/Avatar";
import Language from "./components/Language";
import Awards from "./components/Awards";
import { useEffect } from "react";

const sectionComponents = {
    personalInfo: PersonalInfo,
    education: Education,
    workExperience: WorkExperience,
    skills: Skills,
    projects: Projects,
    contact: Contact,
    summary: Summary,
    strengths: Strengths,
    achievements: Achievements,
    organizations: Organizations,
    avatar: Avatar,
    language: Language,
    awards: Awards
};

export default function ResumeRenderer({ template, data, setData, editMode, selectedSection, setSelectedSection }) {
    useEffect(() => {
        if (!template?.layout?.fontLink) return;

        const existingLink = document.querySelector("link[data-font]");

        if (existingLink?.href !== template.layout.fontLink) {
            if (existingLink) document.head.removeChild(existingLink);

            const link = document.createElement("link");
            link.href = template.layout.fontLink;
            link.rel = "stylesheet";
            link.setAttribute("data-font", "true");
            document.head.appendChild(link);
        }
    }, [template?.layout?.fontLink]);

    const templateId = String(template.id);
    const style = templateStyles[templateId] || {};
    const cssVariables = style.vars || {};

    const contextValue = {
        data,
        setData,
        style,
        editMode,
        selectedSection,
        setSelectedSection
    };

    const { grid, fontFamily, fontSize, colorScheme, padding } = template.layout;

    const renderSection = (sectionName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent ? <SectionComponent /> : null;
    };

    const numRows = grid.templateRows.split(" ").length;
    const numCols = grid.templateColumns.split(" ").length;

    const gridMatrix = Array.from({ length: numRows }, () => Array(numCols).fill("."));

    grid.areas.forEach((area) => {
        for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
            for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
                gridMatrix[row][col] = area.name;
            }
        }
    });

    const gridTemplateAreas = gridMatrix.map(row => `"${row.join(" ")}"`).join(" ");

    return (
        <ResumeContext.Provider value={contextValue}>
            <div
                id="resume-view"
                style={{
                    fontFamily,
                    fontSize,
                    padding,
                    background: colorScheme.background,
                    color: colorScheme.text,
                    gridTemplateColumns: grid.templateColumns,
                    gridTemplateRows: grid.templateRows,
                    rowGap: grid.rowGap,
                    columnGap: grid.columnGap,
                    gridTemplateAreas,
                    ...cssVariables
                }}
            >
                {grid.areas.map((area, index) => (
                    <div key={index} style={{ gridArea: area.name, ...(area.style || {}) }}>
                        {area.sections.map((section) => (
                            <div
                                key={section}
                                onClick={() => {
                                    if (editMode) setSelectedSection(section);
                                }}
                                style={{
                                    ...style?.[section]?.box,
                                    outline: editMode && selectedSection === section ? "2px dashed var(--primary-color)" : "none",
                                    cursor: editMode ? "pointer" : "default",
                                    borderRadius: "4px"
                                }}
                            >
                                {renderSection(section)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </ResumeContext.Provider>
    );
}