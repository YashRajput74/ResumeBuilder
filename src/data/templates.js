const template1 = {
    id: 1,
    name: 'Basic Profesional',
    layout: {
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
        ]
    },
    grid: {
        templateColumns: "2fr 3fr",
        templateRows: "auto 1fr",
        columnGap: '1rem',
        rowGap: '1rem',
    }
}


const template2 = {
    id: 2,
    name: 'Non-Basic Profesional',
    layout: {
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
        ]
    },
    grid: {
        templateColumns: "2fr 3fr",
        templateRows: "auto 1fr",
        columnGap: '1rem',
        rowGap: '1rem',
    }
}

/* const userSections = [
  { id: 'sec1', type: 'experience', data: [...] },
  { id: 'sec2', type: 'education', data: [...] },
  { id: 'sec3', type: 'skills', data: [...] },
  ...
]
 */
export const templates = [template1,template2];