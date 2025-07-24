export const template1 = {
    id: 1,
    name: "Modern Grid",
    isAvatar: "false",
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
                    sections: ["contact", "skills", "strengths"]
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
    },
};

const template2 = {
    id: 2,
    name: "Clean Classic",
    isAvatar: "false",
    layout: {
        grid: {
            templateRows: "1fr 1fr 1fr 1fr 1fr",
            templateColumns: "1.5fr 0.5fr 1fr",
            rowGap: "0rem",
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
                    sections: ["contact"]
                },
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
                },
            ],
        },
    },
};

const template3 = {
    id: 3,
    name: "Basic Two Columns",
    isAvatar: "false",
    layout: {
        grid: {
            templateRows: "1fr 0.1fr 12fr",
            templateColumns: "3fr 2fr",
            rowGap: "0rem",
            columnGap: "2rem",
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
                    name: "contacts",
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 3,
                    sections: ["contact"]
                },
                {
                    name: "leftColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education"]
                },
                {
                    name: "rightColumn",
                    rowStart: 3,
                    rowEnd: 4,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["strengths", "skills", "achievements"]
                }
            ]
        },
    },
}

const template4 = {
    id: 4,
    name: "Avatar template",
    filteredColumn: "2",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            rowGap: "0rem",
            columnGap: "2rem",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "summary", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["education", "workExperience"]
                },
            ]
        },
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
    }
}

const template5 = {
    id: 5,
    name: "Spacious Two Column",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "3fr 9fr",
            templateColumns: "2fr 3fr",
            columnGap: "0rem",
            areas: [
                {
                    name: 'header',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 66%, #ffffff 66%, #ffffff 100%)" }
                },
                {
                    name: "headerLeft",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo"],
                    style: { background: "linear-gradient(to bottom, #163853 0%, #163853 66%, #ffffff 66%, #ffffff 100%)" }
                },
                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["education", "language", "skills"]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["workExperience", "contact"]
                },
            ],
        },
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&display=swap",
    },
}

const template6 = {
    id: 6,
    name: "Simple Tactical",
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "auto",
            templateColumns: "2fr 3fr",
            areas: [
                {
                    name: 'leftColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar", "contact", "summary", "language", "skills"],
                    style: { backgroundColor: "#3e465b" }
                },
                {
                    name: 'rightColumn',
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["personalInfo", "education", "workExperience"]
                },
            ],
        },
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
    },
}

const template7 = {
    id: 7,
    name: 'Premium Template',
    isAvatar: "true",
    layout: {
        grid: {
            templateRows: "1fr 12fr",
            templateColumns: "1fr 1fr",
            areas: [
                {
                    name: "header",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["avatar"]
                },
                {
                    name: "contact",
                    rowStart: 1,
                    rowEnd: 2,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["contact"]
                },

                {
                    name: 'leftColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 1,
                    colEnd: 2,
                    sections: ["summary", "workExperience", "education",]
                },
                {
                    name: 'rightColumn',
                    rowStart: 2,
                    rowEnd: 3,
                    colStart: 2,
                    colEnd: 3,
                    sections: ["skills", "organizations", "awards", "language"]
                },
            ],
        },
        fontLink: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
    }
}

export const templates = [template1, template3, template4, template6, template7];