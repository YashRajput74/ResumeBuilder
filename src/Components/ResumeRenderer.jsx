export default function ResumeRenderer({ template, data }) {

    const groupedSections = {};

    template.sections.forEach((section) => {
        if (!groupedSections[section.style.order]) {
            groupedSections[section.style.order] = [];
        }
        groupedSections[section.style.order].push(section);
    });

    const renderContent = (sectionName, sectionData) => {
        if (Array.isArray(sectionData)) {
            if (sectionName === "skills") {
                const skillList = sectionData.map((item) => item.skill).join(", ");
                return <p>{skillList}</p>;
            }
            return sectionData.map((item, i) => (
                <div key={i} style={{ marginBottom: "1rem" }}>
                    {Object.entries(item).map(([field, value]) => (
                        <p key={field}><strong>{field}:</strong> {value}</p>
                    ))}
                </div>
            ));
        }
        else {
            return <p>{sectionData}</p>;
        }
    };

    return (
        <div
            style={{
                fontFamily: template.fontFamily,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
                maxWidth: "900px",
                margin: "auto"
            }}
        >
            {Object.entries(groupedSections).map(([order, sections]) => (
                <div
                    key={order}
                    style={{
                        display: "flex",
                        gap: "1rem",
                        width: "100%",
                    }}
                >
                    {sections.map((section) => (
                        <div
                            key={section.name}
                            style={{
                                ...section.style,
                                flex: section.style.width === "100%" ? "1 1 100%" : `1 1 ${section.style.width}`,
                            }}
                        >
                            <h3 style={template.headingStyle}>
                                {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                            </h3>
                            {renderContent(section.name, data[section.name])}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
