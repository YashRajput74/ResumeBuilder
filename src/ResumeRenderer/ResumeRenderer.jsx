import { templates } from '../data/templates';
import mockUserData from '../data/mockUserData';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Summary from './components/Summary';
import Strengths from './components/Strengths';
import Achievements from './components/Achievements';
import Organizations from './components/Organizations';
import Avatar from './components/Avatar';
import Language from './components/Language';
import Awards from './components/Awards';
import './ResumeRenderer.css'
import { ResumeContext, ResumeProvider } from '../context/ResumeContext';
import templateStyles from '../data/templateStyles';

const sectionComponents = {
    personalInfo: PersonalInfo,
    education: Education,
    workExperience: WorkExperience,
    skills: Skills,
    projects: Projects,
    contact: Contact,
    // summary: Summary,
    // strengths: Strengths,
    // achievements: Achievements,
    // organizations: Organizations,
    // avatar: Avatar,
    // language: Language,
    // awards: Awards
};

export default function ResumeRenderer({
    template,
    editMode,
    selectedSection,
    setSelectedSection,
}) {
    if (!template) return <div>Invalid template selected.</div>;

    const { layout, id: templateId, grid } = template;

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: grid.templateColumns,
        gridTemplateRows: grid.templateRows,
        columnGap: grid.columnGap,
        rowGap: grid.rowGap,
    };

    return (
        <div id="resume-view" style={gridStyle}>
            {layout.areas.map((area) => (
                <div
                    key={area.name}
                    style={{
                        gridColumn: `${area.colStart} / ${area.colEnd}`,
                        gridRow: `${area.rowStart} / ${area.rowEnd}`,
                    }}
                >
                    {area.sections.map((sectionKey) => {
                        const SectionComponent = sectionComponents[sectionKey];
                        if (!SectionComponent) return null;

                        return (
                            <SectionComponent
                                key={sectionKey}
                                sectionKey={sectionKey}
                                editMode={editMode}
                                selectedSection={selectedSection}
                                setSelectedSection={setSelectedSection}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}