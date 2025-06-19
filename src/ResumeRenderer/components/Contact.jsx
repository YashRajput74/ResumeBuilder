import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Contact() {
    const { data, style } = useResume();

    return (
        <div className="contactList" style={{ color: style.contentColor }}>
            <h2>Contact</h2>
            <div className="contactItem">
                <FontAwesomeIcon icon={faPhone} />
                <p>{data.phoneNo}</p>
            </div>

            <div className="contactItem">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{data.email}</p>
            </div>

            <div className="contactItem">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{data.address}</p>
            </div>

            <div className="contactItem">
                <FontAwesomeIcon icon={faGlobe} />
                <a href={data.portfolio}>Portfolio</a>
            </div>

            <div className="contactItem">
                <FontAwesomeIcon icon={faLinkedin} />
                <a href={data.linkedin}>LinkedIn</a>
            </div>

            <div className="contactItem">
                <FontAwesomeIcon icon={faGithub} />
                <a href={data.github} target='blank_'>Github</a>
            </div>
        </div>
    )
}