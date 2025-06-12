export const template1 = {
    layout: {
        grid: {
            templateRows: 'auto auto 1fr',
            templateColumns: '1fr 1fr 1fr',
            areas: [
                { name: 'header', colStart: 1, colEnd: 4, rowStart: 1, rowEnd: 2, sections: ["personalInfo"]},
                { name: 'leftColumn', colStart: 1, colEnd: 2, rowStart: 2, rowEnd: 3, sections: ["education", "workExperience"] },
                { name: 'rightColumn', colStart: 2, colEnd: 4, rowStart: 2, rowEnd: 3, sections: ["skills", "projects"] },
            ]
        },
        fontFamily: "Lato",
        fontSize: "40px",
        colorScheme: {
            primary: "#3498DB",
            background: "#FFFFFF",
            text: "#333333"
        }
    }
};

export const templates=[template1];