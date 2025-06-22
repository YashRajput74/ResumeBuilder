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
    language: Language
};

export default function ResumeRenderer({ template, data }) {
    const templateId = String(template.id);
    const style = templateStyles[templateId] || {};
    const cssVariables = style.vars || {};

    const contextValue = {
        data,
        style
    };

    const { grid, fontFamily, fontSize, colorScheme } = template.layout;

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
                            <div key={section} style={style?.[section]?.box}>
                                {renderSection(section)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </ResumeContext.Provider>
    );
}