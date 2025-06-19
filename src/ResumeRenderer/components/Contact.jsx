import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Contact() {
    const { data, style } = useResume();

    return (
        <div className="contactList" style={style?.contact?.box}>
            <h2 style={style?.contact?.heading}>Contact</h2>
            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon}/>
                <p style={style?.contact?.content}>{data.phoneNo}</p>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faEnvelope}  style={style?.contact?.icon}/>
                <p style={style?.contact?.content}>{data.email}</p>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faLocationDot}  style={style?.contact?.icon}/>
                <p style={style?.contact?.content}>{data.address}</p>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faGlobe}  style={style?.contact?.icon}/>
                <a href={data.portfolio} style={style?.contact?.anchor}>Portfolio</a>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faLinkedin}  style={style?.contact?.icon}/>
                <a href={data.linkedin} style={style?.contact?.anchor}>LinkedIn</a>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faGithub}  style={style?.contact?.icon}/>
                <a href={data.github} target='blank_'  style={style?.contact?.anchor}>Github</a>
            </div>
        </div>
    )
}