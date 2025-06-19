import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Projects() {
    const { data, style } = useResume();
    return (
        <div className="projects">
            <h2>Projects</h2>
            {data.projects.map((project, index) => (
                <div className="eachProject" key={index}>
                    <h3>{project.Title}
                        <a href={project.Link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" size="sm" />
                        </a>
                    </h3>

                    {Array.isArray(project.Description) ? (
                        <ul>
                            {project.Description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{project.Description}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

/* export default function Projects({ data }) {
    return (
        <div className="projects">
            <h2>Projects</h2>
            {data.projects.map((project, index) => (
                <div className="eachProject" key={index}>
                    <h3>{project.Title}</h3>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer">{project.Link}</a>

                    {Array.isArray(project.Description) ? (
                        <ul>
                            {project.Description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{project.Description}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
 */
// <FontAwesomeIcon icon={faArrowUpRightFromSquare} />