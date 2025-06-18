const mockUserData = {
    name: "Ayesha Takia",
    firstName: "Ayesha",
    lastName: "Takia",
    email: "ayesha.takia@example.com",
    phoneNo: "+91 9876543210",
    address: "123, Park Lane, Delhi, India",
    summary: "Enthusiastic and detail-oriented web developer...",
    profilePhoto: "",
    portfolio: "https://ayesha-portfolio.netlify.app",
    github: "https://github.com/YashRajput74",
    linkedin: "linkedin.com/in/ayeshatakia",
    skype: "ayesha.takia",

    skills: ["JavaScript", "React", "HTML5", "CSS3", "Git & GitHub", "JavaScript", "React", "HTML5", "CSS3", "Git & GitHub", "JavaScript", "React", "HTML5", "CSS3", "Git & GitHub"],

    projects: [
        {
            Title: "Personal Portfolio Website",
            Link: "https://ayesha-portfolio.netlify.app",
            GithubLink: "",
            Description: "Developed a responsive personal portfolio..."
        },
        {
            Title: "Weather App",
            Link: "https://github.com/ayesha/weather-app",
            GithubLink: "",
            Description: "A weather forecast app built with..."
        },
        {
            Title: "Personal Portfolio Website",
            Link: "https://ayesha-portfolio.netlify.app",
            GithubLink: "",
            Description: "Developed a responsive personal portfolio..."
        },
        {
            Title: "Weather App",
            Link: "https://github.com/ayesha/weather-app",
            GithubLink: "",
            Description: [
                "Built a weather forecast app using OpenWeatherMap API.",
                "Implemented search by city functionality.",
                "Displayed real-time weather data using React."
            ]
        },
        {
            Title: "Personal Portfolio Website",
            Link: "https://ayesha-portfolio.netlify.app",
            GithubLink: "",
            Description: "Developed a responsive personal portfolio..."
        }
    ],

    achievements: [
        {
            Title: "Top 5 Finalist - Hackathon",
            Description: "Built a disaster alert app during a 24-hour..."
        },
        {
            Title: "Open Source Contributor",
            Description: "Contributed to documentation and bug fixes..."
        }
    ],

    education: [
        {
            School: "ABC Public School",
            Degree: "Senior Secondary (Science)",
            City: "Delhi",
            "Start Date": "2017",
            "End Date": "2019",
            Description: "Completed high school with focus on..."
        },
        {
            School: "XYZ Institute of Technology",
            Degree: "B.Tech in Computer Science",
            City: "Delhi",
            "Start Date": "2019",
            "End Date": "2023",
            Description: "Learned web development, DSA, etc."
        }
    ],

    experience: [
        {
            Role: "Frontend Developer Intern",
            Organization: "TechNova Pvt Ltd",
            Location: "Remote",
            "Start Date": "2023",
            "End Date": "2024",
            Description: [
                "Built reusable React components",
                "Integrated REST APIs",
                "Improved UI performance"
            ]
        },
        {
            Role: "Frontend Developer Intern",
            Organization: "TechNova Pvt Ltd",
            Location: "Remote",
            "Start Date": "2023",
            "End Date": "2024",
            Description: [
                "Built reusable React components",
                "Integrated REST APIs",
                "Improved UI performance"
            ]
        }
    ],

    certifications: [
        {
            Title: "React - Frontend Library",
            Organization: "freeCodeCamp",
            Date: "2023"
        },
        {
            Title: "Responsive Web Design",
            Organization: "Coursera",
            Date: "2022"
        }
    ]
};

export default mockUserData;


/* const mockUserData = {
    firstName: "Jordan",
    middleName: "",
    lastName: "Smith",
    position: "Experienced Technology Executive",
    email: "john.smith@example.com",
    phoneNo: "+91 9876543210",
    address: "123, Park Lane, Delhi, India",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia et ut facilis dolorem debitis provident eos temporibus, repudiandae animi ullam aut dicta veritatis, atque repellat voluptatem? Voluptatum nihil aperiam impedit repellat sapiente asperiores obcaecati totam architecto, tenetur labore corporis nisi",
    profilePhoto: "",
    portfolio: "",
    github: "https://github.com/johnSmith",
    linkedin: "linkedin.com/in/johnSmith",

    skills: ["Strategic Planning", "Media Relations", "Team Leadership", "Project Management", "Corporate Communications, Event Planning", "Content Development", "Cyber Security", "IoT", "5G", "Cloud"],

    projects: [
        {
            Title: "",
            Link: "",
            GithubLink: "",
            Description: ""
        },
    ],

    achievements: [
        {
            Title: "Client Retention Rate",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia et ut facilis dolorem debitis provident eos"
        },
        {
            Title: "Team Leadership",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia"
        },
        {
            Title: "Brand Visibility",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia"
        }
    ],

    strengths: [
        {
            Title: "Strategic Planning",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia et ut facilis dolorem debitis provident eos"
        },
        {
            Title: "Collaboration",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia"
        },
        {
            Title: "Media Relations",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati, veniam cum quod officia"
        }
    ],

    education: [
        {
            School: "Stanford University",
            Degree: "Master's Degree in Business Administration",
            City: "Standford, Claifornia",
            "Start Date": "2011",
            "End Date": "2013",
            Description: ""
        },
        {
            School: "University of California",
            Degree: "Bachelor's Degree in Communications",
            City: "Berkeley, California",
            "Start Date": "2007",
            "End Date": "2011",
            Description: ""
        }
    ],

    experience: [
        {
            Role: "Account Director",
            Organization: "Edelman",
            Location: "San Francisco, California",
            "Start Date": "2019",
            "End Date": "2023",
            Description: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati,"
            ]
        },
        {
            Role: "Senior Account Manager",
            Organization: "Weber Shandwick",
            Location: "San Francisco, California",
            "Start Date": "2016",
            "End Date": "2019",
            Description: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati,"
            ]
        },
        {
            Role: "Account Manager",
            Organization: "Ketchum",
            Location: "San Francisco, California",
            "Start Date": "2013",
            "End Date": "2016",
            Description: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati,"
            ]
        }
    ],

    certifications: [
        {
            Title: "React - Frontend Library",
            Organization: "freeCodeCamp",
            Date: "2023"
        },
        {
            Title: "Responsive Web Design",
            Organization: "Coursera",
            Date: "2022"
        }
    ]
};

export default mockUserData;
 */