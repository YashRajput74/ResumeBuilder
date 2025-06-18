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
            templateColumns: "2fr 3fr",
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
                    sections: ["contact","skills"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects","education"]
                },
            ],
        }
    },
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
};

const template3 = {
    id: 3,
    name: "Basic Two Columns",
    layout: {
        grid: {
            templateRows: "1fr 8fr",
            templateColumns: "1fr 2fr",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["personalInfo"]
                },
                {
                    name: "leftColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary","workExperience", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["strengths","skills", "achievements"]
                }
            ]
        },
        fontFamily: "'Lato', sans-serif",
        fontSize: "14px",
        colorScheme: {
            background: "#ffffff",
            text: "#333333"
        }
    }
}

export const templates = [template1, template2, template3,];