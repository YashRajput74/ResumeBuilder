import { useState } from "react"
import "./App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import TemplateSection from "./Components/TemplateSection"
import ResumeRenderer from "./ResumeRenderer/ResumeRenderer"
import {templates} from "./data/templates"
import mockUserData from "./data/mockUserData"

export default function App() {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const handleSelectTemplate = (template) => {
        setSelectedTemplate(template);
        setTimeout(() => {
            document
                .getElementById("resume-view")
                ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <>
            <Header />
            <Hero />
            <TemplateSection templates={templates}
                onSelectTemplate={handleSelectTemplate} />
            {selectedTemplate && (
                <ResumeRenderer template={selectedTemplate} data={mockUserData} />
            )}
        </>
    )
}