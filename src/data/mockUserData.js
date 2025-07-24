const mockUserData = {
    firstName: "Jane",
    lastName: "Doe",
    position: "Web Developer",
    profilePhoto: "https://media-public.canva.com/p7zgk/MAEugcp7zgk/1/t.jpg",
    summary: "Passionate web developer with expertise in React, JavaScript, and creating beautiful, user-centric web applications.",

    contact: [
        {
            title: "Email",
            icon: "email_icon_url",
            link: "jane.doe@example.com",
            textShown: "jane.doe@example.com",
        },
        {
            title: "Phone",
            icon: "phone_icon_url",
            link: "+91 9876543210",
            textShown: "+91 9876543210",
        },
        {
            title: "Address",
            icon: "address_icon_url",
            link: "123, Park Lane, Delhi, India",
            textShown: "123, Park Lane, Delhi, India",
        },
        {
            title: "Portfolio",
            icon: "portfolio_icon_url",
            link: "https://jane-portfolio.netlify.app",
            textShown: "My Portfolio",
        },
        {
            title: "GitHub",
            icon: "github_icon_url",
            link: "https://github.com/janeDoe",
            textShown: "GitHub Profile",
        },
        {
            title: "LinkedIn",
            icon: "linkedin_icon_url",
            link: "https://linkedin.com/in/janeDoe",
            textShown: "LinkedIn Profile",
        }
    ],

    skills: {
        "Programming Languages": ["JavaScript", "Python", "C++", "Java"],
        "Frontend Development": ["React", "HTML5", "CSS3", "SASS", "Bootstrap"],
        "Backend Development": ["Node.js", "Express", "MongoDB"],
        "Version Control": ["Git", "GitHub"],
    },

    // skills: ["JavaScript", "React", "HTML5", "CSS3", "Git & GitHub"],

    projects: [
        {
            title: "Weather App",
            link: "https://github.com/janeDoe/weather-app",
            githubLink: "https://github.com/janeDoe/weather-app-code",
            date: "2023-04-15",
            description: [
                "Built a weather forecast app using React and OpenWeather API.",
                "Implemented city-based weather search functionality.",
                "Displayed real-time weather information such as temperature, humidity, and wind speed.",
            ],
            //description: "Built a weather forecast app using React and OpenWeather API. Implemented city-based weather search functionality.Displayed real-time weather information such as temperature, humidity, and wind speed."
        },
        {
            title: "Personal Portfolio",
            link: "https://jane-portfolio.netlify.app",
            githubLink: "https://github.com/janeDoe/portfolio",
            date: "2022-12-01",
            description: [
                "Designed and developed my personal portfolio website.",
                "Focused on responsive design with mobile-first approach.",
                "Showcased various personal projects and achievements.",
            ]
        }
    ],

    achievements: [
        {
            title: "Top 5 Finalist - Hackathon",
            date: "2023-03-20",
            description: "Built a disaster alert app during a 24-hour hackathon. The app sends alerts based on real-time disaster data from multiple sources.",
            /* 
                description: [
                    "Designed and developed my personal portfolio website.",
                    "Focused on responsive design with mobile-first approach.",
                    "Showcased various personal projects and achievements.",
                ]
            */
        },
        {
            title: "Open Source Contributor",
            date: "2022-06-12",
            description: "Contributed to various open-source repositories by fixing bugs, improving documentation, and developing new features.",
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
                "Scored 8.9 CGPA in Class 10",
                "Top 5% of graduating class",
                "Participated in various extracurricular activities like coding competitions and debates."
            ]
            //description: "Built a weather forecast app using React and OpenWeather API. Implemented city-based weather search functionality.Displayed real-time weather information such as temperature, humidity, and wind speed."
        },
        {
            school: "XYZ Institute of Technology",
            degree: "B.Tech in Computer Science",
            city: "Delhi",
            startDate: "2019",
            endDate: "2023",
            description: [
                "Scored 8.9 CGPA in overall degree.",
                "Top 10% in the department.",
                "Led multiple student groups in hackathons and coding events."
            ]
        }
    ],

    experience: [
        {
            role: "Frontend Developer Intern",
            organization: "TechNova Pvt Ltd",
            location: "Remote",
            startDate: "2023-06-01",
            endDate: "2024-06-01",
            description: [
                "Developed reusable React components to be integrated into multiple parts of the project.",
                "Worked with APIs to retrieve and display dynamic content on the frontend.",
                "Collaborated with design team to implement UI/UX changes based on feedback."
            ]
            //description: "Built a weather forecast app using React and OpenWeather API. Implemented city-based weather search functionality.Displayed real-time weather information such as temperature, humidity, and wind speed."
        },
        {
            role: "Frontend Developer Intern",
            organization: "TechNova Pvt Ltd",
            location: "Remote",
            startDate: "2023-01-01",
            endDate: "2023-05-01",
            description: [
                "Developed landing pages and interactive user interfaces using React.",
                "Optimized the performance of the app by implementing lazy loading and code splitting.",
                "Worked with Git for version control and collaborated on GitHub with other developers."
            ]
        }
    ],

    certifications: [
        {
            title: "React - Frontend Library",
            organization: "freeCodeCamp",
            date: "2023-07-15",
        },
        {
            title: "Responsive Web Design",
            organization: "Coursera",
            date: "2022-05-10",
            //description: "Built a weather forecast app using React and OpenWeather API. Implemented city-based weather search functionality.Displayed real-time weather information such as temperature, humidity, and wind speed."
        }
    ],

    organizations: [
        {
            title: "American Management Association",
            startDate: "2023-01-01",
            endDate: "2023-05-01",
            description: "Active member, participated in workshops on leadership and management."
        },
        {
            title: "Association of Private Enterprise Education",
            startDate: "2023-01-01",
            endDate: "2023-05-01",
            description: "Engaged in initiatives promoting private education and entrepreneurship."
            /* 
                description: [
                    "Designed and developed my personal portfolio website.",
                    "Focused on responsive design with mobile-first approach.",
                    "Showcased various personal projects and achievements.",
                ]
            */
        }
    ],

    strengths: [
        {
            title: "Strategic Planning",
            description: "Able to think ahead and plan for future goals by considering long-term outcomes and constraints."

        },
        {
            title: "Collaboration",
            description: "Works well in teams and fosters a positive and productive team environment."
        },
        {
            title: "Media Relations",
            description: "Experienced in communicating with various stakeholders and handling media inquiries."
            /* 
                description: [
                    "Designed and developed my personal portfolio website.",
                    "Focused on responsive design with mobile-first approach.",
                    "Showcased various personal projects and achievements.",
                ]
            */
        }
    ],

    languages: [
        {
            id: "eng",
            title: "English",
            proficiency: "Fluent",
        },
        {
            id: "spa",
            title: "Spanish",
            proficiency: "Intermediate",
        },
        {
            id: "fre",
            title: "French",
            proficiency: "Basic",
        }
    ],

    // language: ["English", "Spanish", "French"],

    awards: [
        {
            title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
            date: 'Venture(USA)',
            description: "Served as a jury member evaluating entrepreneurial startup ideas in the competition."
            /* 
                description: [
                    "Designed and developed my personal portfolio website.",
                    "Focused on responsive design with mobile-first approach.",
                    "Showcased various personal projects and achievements.",
                ]
            */
        },
        {
            title: 'Jury Member, Venture Cup Entrepreneurship Competition(2020)',
            date: 'Venture(USA)',
            description: "Contributed insights on evaluating innovation and market viability for startups."
        }
    ]
};

export default mockUserData;