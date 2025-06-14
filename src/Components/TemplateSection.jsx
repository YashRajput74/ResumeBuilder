export default function TemplateSection({templates,onSelectTemplate}) {
    return (
        <section id="templates">
            <h2>Choose a resume Template</h2>
            <div className="templateGrid">
                {templates.map((template) => (
                    <div key={template.id} className="templateCard" onClick={()=>{onSelectTemplate(template.id)}}>
                        <div className="templatePreview">
                            
                        </div>
                        <p>{template.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}