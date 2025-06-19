const sharedStyles = {
    "2": {
        heading: {
            color: "var(--heading-color)",
            textDecoration: "none",
            textAlign: "center",
            borderTop: "2px solid var(--heading-color)",
            borderBottom: "2px solid var(--heading-color)"
        },
        icon: {

        },
        content: {

        }
    }
};

const templateStyles = {
    "2": {
        vars: {
            "--heading-color": "#003366",
            "--accent-color": "#3498db",
            "--secondary-heading-color": "gray",
            "--content-color": "#111",
            "--section-padding": "1rem"
        },
        personalInfo: {
            box: {
                border: "1px solid white",
            },
            name: {
                color: "var(--heading-color)",
            },
            position: {
                color: "var(--secondary-heading-color)",
                fontWeight: "400",
            },
            summary: {
                color: "var(--content-color)",
                paddingTop: "10px"
            }
        },
        contact: {
            heading: {
                display: "none"
            },
            innerBox: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row-reverse"
            },
            icon: {
                color: "var(--heading-color)",
                marginLeft: "10px"
            }
        },
        skills: {
            heading: {
                ...sharedStyles["2"].heading,
            },
            eachSkillBox: {
                borderRadius: "1vh",
                fontWeight: "400",
                backgroundColor: "var(--heading-color)",
                border: "none",
                color: "white"
            }
        },
        workExpe: {
            box: {
                border: "none"
            },
            heading: {
                ...sharedStyles["2"].heading,
            },
            role: {
                color: "var(--content-color)"
            },
            organization: {
                color: "var(--content-color)"
            },
            dates: {
                color: "gray"
            },
            wholeList: {
                listStyle: "square"
            },
        },
        education: {
            box: {
                border: "none"
            },
            heading: {
                ...sharedStyles["2"].heading,
            },
            eachSchool: {
                color: "var(--content-color)"
            },
            city: {
                color: "gray"
            },
        },
        organiz: {
            box: {
            },
            heading:{
                ...sharedStyles["2"].heading,
                marginBottom: "10px"
            },
            innerBox:{
                display: "flex",
                flexWrap: "wrap"
            },
            eachOrganiz: {
                padding: "0px 20px",
                marginBottom: "20px"
            },
            title: {
                color: "var(--content-color)"
            },
            date: {
                textAlign: "left"
            }
        }
    }
}

export default templateStyles;