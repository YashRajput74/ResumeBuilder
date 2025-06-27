const mockUserData = {
    personalInfo: {
        firstName: "Jane",
        lastName: "Doe",
        position: "Web Developer",
        summary: {
            fragments: [
                {
                    text: "A web developer who designs and builds interactive websites.",
                    bold: false,
                    italic: false,
                    underline: false
                }
            ]
        }
    },
    contact:{
        email: "janeDoe.profile@example.com",
        phoneNo: "+91 9876543210",
        address: "123, Park Lane, Delhi, India",
        portfolio: "https://janeDoe-portfolio.netlify.app",
        github: "https://github.com/janeDoe",
        linkedin: "https://linkedin.com/in/janeDoe",
        skype: "janeDoe.profile",
    },

    skills: ["JavaScript", "React", "HTML5", "CSS3", "Git & GitHub"],

    projects: [
        {
            title: "Weather App",
            link: "https://weather-app.netlify.app",
            githubLink: "https://github.com/janeDoe/weather-app",
            description: [
                {
                    id: "proj1",
                    fragments: [
                        { text: "Built a weather forecast app using React and OpenWeather API.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "proj2",
                    fragments: [
                        { text: "Implemented search functionality by city name and geolocation.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "proj3",
                    fragments: [
                        { text: "Displayed real-time temperature, humidity, and weather icons.", bold: false, italic: false, underline: false }
                    ]
                }
            ]
        },
        {
            title: "Portfolio Website",
            link: "https://janeDoe-portfolio.netlify.app",
            githubLink: "https://github.com/janeDoe/portfolio",
            description: [
                {
                    id: "proj1",
                    fragments: [
                        { text: "Designed and developed a responsive portfolio site.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "proj2",
                    fragments: [
                        { text: "Used React, GSAP animations, and deployed on Netlify.", bold: false, italic: false, underline: false }
                    ]
                }
            ]
        }
    ],

    achievements: [
        {
            title: "Top 5 Finalist - Hackathon",
            description: {
                fragments: [
                    {
                        text: "Built a disaster alert app during a 24-hour national hackathon.",
                        bold: false,
                        italic: false,
                        underline: false
                    }
                ]
            }
        },
        {
            title: "Open Source Contributor",
            description: {
                fragments: [
                    {
                        text: "Contributed to documentation and bug fixes in multiple GitHub projects.",
                        bold: false,
                        italic: false,
                        underline: false
                    }
                ]
            }
        }
    ],

    education: [
        {
            school: "ABC Public School",
            degree: "Senior Secondary (Science)",
            city: "Delhi",
            startDate: "2017",
            endDate: "2019",
            description: [
                {
                    id: "edu1",
                    fragments: [
                        { text: "Scored 89% in Class 12 (CBSE Board).", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "edu2",
                    fragments: [
                        { text: "Top 5% of graduating class.", bold: false, italic: false, underline: false }
                    ]
                }
            ]
        },
        {
            school: "XYZ Institute of Technology",
            degree: "B.Tech in Computer Science",
            city: "Delhi",
            startDate: "2019",
            endDate: "2023",
            description: [
                {
                    id: "edu1",
                    fragments: [
                        { text: "Graduated with a CGPA of 8.9.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "edu2",
                    fragments: [
                        { text: "Completed a capstone project on smart irrigation system.", bold: false, italic: false, underline: false }
                    ]
                }
            ]
        }
    ],

    experience: [
        {
            role: "Frontend Developer Intern",
            organization: "TechNova Pvt Ltd",
            location: "Remote",
            startDate: "2023",
            endDate: "2024",
            description: [
                {
                    id: "desc1",
                    fragments: [
                        { text: "Built reusable React components for a dashboard UI.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "desc2",
                    fragments: [
                        { text: "Integrated REST APIs and managed state with Redux.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "desc3",
                    fragments: [
                        { text: "Improved UI performance with memoization and lazy loading.", bold: false, italic: false, underline: false }
                    ]
                }
            ]
        },
        {
            role: "Open Source Contributor",
            organization: "GirlScript Summer of Code",
            location: "Remote",
            startDate: "2022",
            endDate: "2022",
            description: [
                {
                    id: "desc1",
                    fragments: [
                        { text: "Fixed accessibility issues in documentation.", bold: false, italic: false, underline: false }
                    ]
                },
                {
                    id: "desc2",
                    fragments: [
                        { text: "Added unit tests with Jest and improved test coverage.", bold: false, italic: false, underline: false }
                    ]
                }
            ]
        }
    ],

    certifications: [
        {
            title: "React - Frontend Library",
            organization: "freeCodeCamp",
            date: "2023"
        },
        {
            title: "Responsive Web Design",
            organization: "Coursera",
            date: "2022"
        }
    ],

    organizations: [
        {
            title: "American Management Association",
            date: "2015–Present"
        },
        {
            title: "Association of Private Enterprise Education",
            date: "2014–Present"
        }
    ],

    strengths: [
        {
            title: "Strategic Planning",
            description: {
                fragments: [
                    {
                        text: "Proficient in identifying goals and setting long-term strategies for scalable web solutions.",
                        bold: false,
                        italic: false,
                        underline: false
                    }
                ]
            }
        },
        {
            title: "Collaboration",
            description: {
                fragments: [
                    {
                        text: "Experienced in working within Agile teams and contributing effectively to group efforts.",
                        bold: false,
                        italic: false,
                        underline: false
                    }
                ]
            }
        },
        {
            title: "Media Relations",
            description: {
                fragments: [
                    {
                        text: "Comfortable with presenting technical content to non-technical audiences.",
                        bold: false,
                        italic: false,
                        underline: false
                    }
                ]
            }
        }
    ],

    language: ["English", "Spanish", "French"],

    awards: [
        {
            title: "Jury Member - Venture Cup Entrepreneurship Competition",
            date: "2019"
        },
        {
            title: "Women in Tech Scholarship - Google India",
            date: "2022"
        }
    ]
};

export default mockUserData;