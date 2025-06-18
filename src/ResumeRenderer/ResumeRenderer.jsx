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

const sectionComponents = {
    personalInfo: PersonalInfo,
    education: Education,
    workExperience: WorkExperience,
    skills: Skills,
    projects: Projects,
    contact: Contact,
    summary: Summary,
    strengths: Strengths,
    achievements: Achievements
};

export default function ResumeRenderer({ template, data }) {
    const { grid, fontFamily, fontSize, colorScheme } = template.layout;

    const renderSection = (sectionName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent ? <SectionComponent data={data} /> : null;
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
        <div
            id="resume-view"
            style={{
                fontFamily,
                fontSize,
                background: colorScheme.background,
                color: colorScheme.text,
                gridTemplateColumns: grid.templateColumns,
                gridTemplateRows: grid.templateRows,
                gridTemplateAreas,
            }}
        >
            {grid.areas.map((area, index) => (
                <div key={index} style={{ gridArea: area.name }}>
                    {area.sections.map((section) => {
                        const sectionStyle = template.sectionStyles?.[section] || {};
                        return (
                            <div key={section} style={sectionStyle}>
                                {renderSection(section)}
                            </div>
                        );
                    })}

                </div>
            ))}
        </div>
    );
}
