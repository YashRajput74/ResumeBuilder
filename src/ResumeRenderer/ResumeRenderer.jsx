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
import { ResumeContext } from '../context/ResumeContext';
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

export default function ResumeRenderer({ templateId = 1, userData = mockUserData }) {
    const template = templates.find(t => t.id === templateId);

    if (!template) return <div>Invalid template selected.</div>;

    const { layout } = template;
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: template.grid.templateColumns,
        gridTemplateRows: template.grid.templateRows,
        columnGap: template.grid.columnGap,
        rowGap: template.grid.rowGap,
    };

    return (
        <ResumeContext.Provider value={{ data: userData, style: templateStyles[templateId] }}>
            <div id="resume-view" style={gridStyle}>
                {layout.areas.map(area => (
                    <div
                        key={area.name}
                        style={{
                            gridColumn: `${area.colStart} / ${area.colEnd}`,
                            gridRow: `${area.rowStart} / ${area.rowEnd}`
                        }}
                    >
                        {area.sections.map(sectionKey => {
                            const SectionComponent = sectionComponents[sectionKey];
                            const sectionData = userData[sectionKey];

                            if (!SectionComponent || !sectionData) return null;

                            return (
                                <SectionComponent key={sectionKey} data={sectionData} />
                            );
                        })}
                    </div>
                ))}
            </div>
        </ResumeContext.Provider>
    );
}
