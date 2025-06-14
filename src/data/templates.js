import { sectionStyles } from "./sectionStyles";

export const template1 = {
    id: 1,
    name: "Modern Grid",
    layout: {
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        },
        grid: {
            templateColumns: "1fr 1fr",
            templateRows: "auto 1fr",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["skills", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects"]
                },
            ],
        }
    },
    sectionStyles: {
        personalInfo: sectionStyles.coloredHeader,
        education: sectionStyles.blueCard,
        workExperience: sectionStyles.modernBox,
        skills: sectionStyles.minimal,
        projects: sectionStyles.modernBox,
    }
};
const template2 = {
    id: 2,
    name: "Clean Classic",
    layout: {
        grid: {
            templateRows: "auto auto auto auto auto",
            templateColumns: "1fr",
            areas: [
                { name: "header", rowStart: 1, rowEnd: 2, colStart: 1, colEnd: 2, sections: ["personalInfo"] },
                { name: "skills", rowStart: 2, rowEnd: 3, colStart: 1, colEnd: 2, sections: ["skills"] },
                { name: "workExperience", rowStart: 3, rowEnd: 4, colStart: 1, colEnd: 2, sections: ["workExperience"] },
                { name: "education", rowStart: 4, rowEnd: 5, colStart: 1, colEnd: 2, sections: ["education"] },
                { name: "organizations", rowStart: 5, rowEnd: 6, colStart: 1, colEnd: 2, sections: ["organizations"] }
            ]
        },
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            primary: "#3498DB",
            background: "#FFFFFF",
            text: "#333333"
        }
    },
    sectionStyles: {
        personalInfo: sectionStyles.cleanHeader,
        skills: sectionStyles.blueBoxSkills,
        education: sectionStyles.cleanHeader,
        workExperience: sectionStyles.cleanHeader,
        organizations: sectionStyles.cleanHeader
    }
};


export const templates = [template1, template2];