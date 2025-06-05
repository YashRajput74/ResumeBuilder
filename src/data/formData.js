const FormData = {
    firstName: { label: "First Name", type: "text", required: true },
    middleName: { label: "Middle Name", type: "text", required: false },
    lastName: { label: "Last Name", type: "text", required: true },
    dateOfBirth: { label: "Date of Birth", type: "date", required: true },
    email: { label: "Email", type: "email", required: true },
    phoneNo: { label: "Phone Number", type: "tel", required: true },
    address: { label: "Address", type: "text", required: true },
    summary: { label: "Summary", type: "textarea", required: false },
    profilePhoto: { label: "Profile Image"  , type: "file", required: false },
    projects: {
        label: "Projects",
        fields: [
            { label: "proj_title", type: "text", required: true },
            { label: "proj_link", type: "text", required: true },
            { label: "proj_description", type: "textarea", required: false }
        ]
    },
    skills: {
        label: "Skills",
        fields: [
            { label: "skill", type: "text", required: false }
        ]
    },
    achievements: {
        label: "Achievements",
        fields: [
            { type: "text", label: "achieve_title", required: false },
            { label: "achieve_description", type: "text", required: false }
        ]
    },
    education: {
        label: "Education",
        fields: [
            { label: "edu_school", type: "text" },
            { label: "edu_degree", type: "text" },
            { label: "edu_city", type: "text" },
            { label: "edu_start_date", type: "text" },
            { label: "edu_graduation_date", type: "text" },
            { label: "edu_description", type: "text" }
        ]
    },
    experience: {
        label: "Experience",
        fields: [
            { label: "exp_title", type: "text" },
            { label: "exp_organization", type: "text" },
            { label: "exp_location", type: "text" },
            { label: "exp_start_date", type: "number" },
            { label: "exp_end_date", type: "number" },
            { label: "exp_description", type: "text" }
        ]
    },
    certifications: {
        label: "Certifications",
        fields: [
            { label: "certification_title", type: "text" },
            { label: "certification_organization", type: "text" },
            { label: "certification_date", type: "number" }
        ]
    }
}

export default FormData;