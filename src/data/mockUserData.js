const mockUserData = {
    firstName: "Ayesha",
    lastName: "Takia",
    dateOfBirth: "2025-09-15",
    email: "ayesha.takia@example.com",
    phoneNo: "+91 9876543210",
    address: "123, Park Lane, Delhi, India",
    summary: "Enthusiastic and detail-oriented web developer with a passion for building dynamic user interfaces using React. Strong background in team projects and API integrations.",
    profilePhoto: "", 
    projects: [
        {
            Title: "Personal Portfolio Website",
            Link: "https://ayesha-portfolio.netlify.app",
            Description: "Developed a responsive personal portfolio using React and CSS showcasing projects and blogs."
        },
        {
            Title: "Weather App",
            Link: "https://github.com/ayesha/weather-app",
            Description: "A weather forecast app built with OpenWeatherMap API, displaying current weather by location."
        }
    ],

    skills: [
        { skill: "JavaScript" },
        { skill: "React" },
        { skill: "HTML5" },
        { skill: "CSS3" },
        { skill: "Git & GitHub" }
    ],

    achievements: [
        {
            Title: "Top 5 Finalist - Hackathon",
            Description: "Built a disaster alert app during a 24-hour college hackathon."
        },
        {
            Title: "Open Source Contributor",
            Description: "Contributed to documentation and bug fixes in a React open-source project."
        }
    ],

    education: [
        {
            School: "ABC Public School",
            Degree: "Senior Secondary (Science)",
            City: "Delhi",
            "Start Date": "2017",
            "End Date": "2019",
            Description: "Completed high school with a focus on PCM and Computer Science."
        },
        {
            School: "XYZ Institute of Technology",
            Degree: "B.Tech in Computer Science",
            City: "Delhi",
            "Start Date": "2019",
            "End Date" : "2023",
            Description: "Learned web development, data structures, and software engineering."
        }
    ],

    experience: [
        {
            Role: "Frontend Developer Intern",
            Organization: "TechNova Pvt Ltd",
            Location: "Remote",
            "Start Date": 2023,
            "End Date": 2024,
            Description: "Built reusable React components, integrated REST APIs, and improved UI performance."
        }
    ],

    certifications: [
        {
            Title: "React - Frontend Library",
            Organization: "freeCodeCamp",
            Date: 2023
        },
        {
            Title: "Responsive Web Design",
            Organization: "Coursera",
            Date: 2022
        }
    ]
};

export default mockUserData;