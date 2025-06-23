const mockUserData = {
    firstName: "Ayesha",
    lastName: "Takia",
    email: "ayesha.takia@example.com",
    phoneNo: "+91 9876543210",
    position: "Web Developer",
    address: "123, Park Lane, Delhi, India",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur at harum, rem rerum vitae id praesentium placeat deserunt sit voluptatum iusto facere qui consectetur,",
    profilePhoto: "https://media-public.canva.com/rmBDc/MAEiuyrmBDc/1/s.jpg",
    portfolio: "https://ayesha-portfolio.netlify.app",
    github: "https://github.com/YashRajput74",
    linkedin: "linkedin.com/in/ayeshatakia",
    skype: "ayesha.takia",

    skills: ["JavaScript", "React",  "Git & GitHub", "JavaScript", "React", "HTML5", "CSS3", "Git & GitHub"],

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
        },
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
    ],
    organizations: [
        {
            Title: "American Management Association",
            Date: "(2015-Present)"
        },
        {
            Title: "Association of Private Enterprise Education",
            Date: "(2014-Present)"
        },
        {
            Title: "eBusiness Association",
            Date: "(2013-Present)"
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
    award: [
            {
                Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
                Date: 'Venture(USA)'
            },
            {
                Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
                Date: 'Venture(USA)'
            },
            {
                Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
                Date: 'Venture(USA)'
            }
        ],
    language: ["English", "Japanese", "German"]
};

export default mockUserData;

/* const mockUserData = {
    firstName: "Jane",
    lastName: "Roe",
    email: "jane.roe@example.com",
    phoneNo: "202-255-0166",
    position: "Business Development Manager",
    address: "New York, USA",
    summary: "Professional Business Developer with more than four years of expertise in the business development processes. Involved in product testing, management, and development of new business opportunities.",
    profilePhoto: "https://media-public.canva.com/rmBDc/MAEiuyrmBDc/1/s.jpg",
    portfolio: "",
    github: "",
    linkedin: "linkedin.com/in/janedoe",
    skype: "jane.roe",

    skills: ["SEO", "Public Speaking", "Negotiation", "Teamwork", "Decision Making", "Research & Strategy", "Emotional Intelligence", "Outbound Marketing", "Email Marketing",'Google Analytics','Sales & Marketing'],

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
            Title: "",
            Description: ""
        },
        {
            Title: "",
            Description: ""
        }
    ],

    education: [
        {
            School: "The University of Chicago",
            Degree: "MSc in Economics and Business Administration",
            City: "",
            "Start Date": "09/2008",
            "End Date": "06/2010",
            Description: ""
        },
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
                Role: "Senior Account Manager",
                Organization: "Weber Shandwick",
                Location: "San Francisco, California",
                "Start Date": "2016",
                "End Date": "2019",
                Description: [
                    "Lorem ipsum dolor sit amet consectetur adipis elit.",
                    "Lorem ipsum dolor sit amet consectetur aicing elit. Ipsam odit quibusdam sunt",
                    "Lorem ipsum dolor sit amet cdipisicing elit. Ipsam odit quibusdam sunt dignissimos esse obcaecati,"
                ]
            },
        ],

        certifications: [
            {
                Title: "",
                Organization: "",
                Date: ""
            },
        ],
        organizations: [
            {
                Title: "American Management Association",
                Date: "(2015-Present)"
            },
            {
                Title: "Association of Private Enterprise Education",
                Date: "(2014-Present)"
            },
            {
                Title: "eBusiness Association",
                Date: "(2013-Present)"
            }
        ],
        award: [
            {
                Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
                Date: 'Venture(USA)'
            },
            {
                Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
                Date: 'Venture(USA)'
            },
            {
                Title: 'Jury Member, Venture Cup Entrepreneurship Competition(2019)',
                Date: 'Venture(USA)'
            }
        ],
        strengths: [
            {
                Title: "",
                Description: ""
            },
        ],
        language: ["English", "Spanish", "French"]
};

export default mockUserData; */