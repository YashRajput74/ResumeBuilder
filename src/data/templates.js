export const template1 = {
    id: 1,
    name: "Modern Grid",
    layout: {
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
                    sections: ["contact", "skills"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "projects", "education"]
                },
            ],
        },
        colorScheme: {
            background: "#FFFFFF",
            text: "#333333"
        }
    },
};

const template2 = {
    id: 2,
    name: "Clean Classic",
    layout: {
        grid: {
            templateRows: "1fr 1fr 1fr 1fr 1fr",
            templateColumns: "1.5fr 0.5fr 1fr",
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
                    name: "contact", 
                    rowStart: 1, 
                    rowEnd: 2, 
                    colStart: 3, 
                    colEnd: 4,
                    sections: ["contact"] },
                { 
                    name: "skills", 
                    rowStart: 2, 
                    rowEnd: 3, 
                    colStart: 1, 
                    colEnd: 4, 
                    sections: ["skills"] 
                },
                { 
                    name: "workExperience", 
                    rowStart: 3, 
                    rowEnd: 4, 
                    colStart: 1, 
                    colEnd: 4, 
                    sections: ["workExperience"]
                },
                { 
                    name: "education", 
                    rowStart: 4, 
                    rowEnd: 5, 
                    colStart: 1, 
                    colEnd: 4, 
                    sections: ["education"] 
                },
                { 
                    name: "organizations", 
                    rowStart: 5, 
                    rowEnd: 6, 
                    colStart: 1, 
                    colEnd: 4, 
                    sections: ["organizations"] 
                }
            ]
        },
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
                    sections: ["workExperience", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["skills"]
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