const templates = [
    {
        name: "Professional",
        fontFamily: "Roboto, sans-serif",
        headingStyle: {
            fontWeight: "700",
            fontSize: "1.2rem",
            textTransform: "uppercase"
        },
        sections: [
            {
                name: "summary",
                style: {
                    width: "100%",
                    background: "#ffffff",
                    order: 1,
                    padding: "16px"
                }
            },
            {
                name: "experience",
                style: {
                    width: "60%",
                    background: "#f9f9f9",
                    order: 2,
                    padding: "16px"
                }
            },
            {
                name: "skills",
                style: {
                    width: "40%",
                    background: "#ffffff",
                    order: 2,
                    padding: "16px"
                }
            },
            {
                name: "education",
                style: {
                    width: "60%",
                    background: "#f9f9f9",
                    order: 3,
                    padding: "16px"
                }
            },
            {
                name: "projects",
                style: {
                    width: "40%",
                    background: "#ffffff",
                    order: 3,
                    padding: "16px"
                }
            },
            {
                name: "achievements",
                style: {
                    width: "100%",
                    background: "#f1f1f1",
                    order: 4,
                    padding: "16px"
                }
            }
        ]
    }
]

/* const groupedSections = {
    "1": [{
        name: "summary",
        style: {
            width: "100%",
            background: "#ffffff",
            order: 1,
            padding: "16px"
        }
    }],
    "2": [{
        name: "experience",
        style: {
            width: "60%",
            background: "#f9f9f9",
            order: 2,
            padding: "16px"
        }
    },
    {
        name: "skills",
        style: {
            width: "40%",
            background: "#ffffff",
            order: 2,
            padding: "16px"
        }
    }],
    "3": [{
        name: "education",
        style: {
            width: "60%",
            background: "#f9f9f9",
            order: 3,
            padding: "16px"
        }
    },
    {
        name: "projects",
        style: {
            width: "40%",
            background: "#ffffff",
            order: 3,
            padding: "16px"
        }
    }],
    "4": [{
        name: "achievements",
        style: {
            width: "100%",
            background: "#f1f1f1",
            order: 4,
            padding: "16px"
        }
    }]
}
 */
export default templates;

/* 
export const templates = [
    {
        id: "classic",
        name: "Classic",
        primaryColor: "#000000",
        fontFamily: "serif",
        layout: [
            {
                id: "personal",
                order: 1,
                style: { width: "100%", padding: "16px", background: "#fff" }
            },
            {
                id: "experience",
                order: 2,
                style: { width: "100%", padding: "16px", background: "#f5f5f5" }
            },
            {
                id: "education",
                order: 3,
                style: { width: "100%", padding: "16px", background: "#fff" }
            },
            {
                id: "skills",
                order: 4,
                style: { width: "100%", padding: "16px", background: "#f5f5f5" }
            }
        ]
    },
    {
        id: "modern",
        name: "Modern",
        primaryColor: "#0077cc",
        fontFamily: "sans-serif",
        layout: [
            {
                id: "personal",
                order: 1,
                style: { width: "100%", padding: "16px", background: "#fff" }
            },
            {
                id: "skills",
                order: 2,
                style: { width: "100%", padding: "16px", background: "#e6f0fa" }
            },
            {
                id: "experience",
                order: 3,
                style: { width: "100%", padding: "16px", background: "#fff" }
            },
            {
                id: "education",
                order: 4,
                style: { width: "100%", padding: "16px", background: "#f9f9f9" }
            }
        ]
    },
    {
        id: "professional-two-column",
        name: "Professional Two Column",
        primaryColor: "#1a1a1a",
        fontFamily: "Roboto, sans-serif",
        layout: [
            {
                id: "summary",
                order: 1,
                style: {
                    width: "100%",
                    background: "#ffffff",
                    padding: "16px"
                }
            },
            {
                id: "experience",
                order: 2,
                style: {
                    width: "60%",
                    background: "#f9f9f9",
                    padding: "16px"
                }
            },
            {
                id: "skills",
                order: 2,
                style: {
                    width: "40%",
                    background: "#ffffff",
                    padding: "16px"
                }
            },
            {
                id: "education",
                order: 3,
                style: {
                    width: "60%",
                    background: "#f9f9f9",
                    padding: "16px"
                }
            },
            {
                id: "projects",
                order: 3,
                style: {
                    width: "40%",
                    background: "#ffffff",
                    padding: "16px"
                }
            },
            {
                id: "achievements",
                order: 4,
                style: {
                    width: "100%",
                    background: "#f1f1f1",
                    padding: "16px"
                }
            }
        ]
    }
]; */