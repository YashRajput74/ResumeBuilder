import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    const { data, style } = useResume();
    const projects = data.projects || [];

    const bulletIcon = style?.projects?.icon || faCircleCheck;

    return (
        <div className="projects" style={style?.projects?.box}>
            <h2 style={style?.projects?.heading}>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} style={style?.projects?.projectBox}>
                    <div style={style?.projects?.titleBox}>
                        <h3 style={style?.projects?.title}>{project.title}</h3>
                        {project.link && (
                            <a href={project.link} style={style?.projects?.link} target="_blank" rel="noreferrer">
                                Live
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} style={style?.projects?.link} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        )}
                    </div>

                    <ul style={style?.projects?.list}>
                        {project.description.map((desc, i) => (
                            <li key={i} style={style?.projects?.listItem}>
                                <FontAwesomeIcon icon={bulletIcon} style={style?.projects?.bulletIcon} />
                                {desc.fragments.map((frag, j) => (
                                    <span
                                        key={j}
                                        style={{
                                            fontWeight: frag.bold ? 'bold' : 'normal',
                                            fontStyle: frag.italic ? 'italic' : 'normal',
                                            textDecoration: frag.underline ? 'underline' : 'none'
                                        }}
                                    >
                                        {frag.text}
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
