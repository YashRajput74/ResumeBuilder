import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Contact() {
    const { data, style } = useResume();

    const contactFields = {
        phoneNo: { icon: faPhone, label: data.phoneNo, isLink: false },
        email: { icon: faEnvelope, label: data.email, isLink: false },
        address: { icon: faLocationDot, label: data.address, isLink: false },
        portfolio: { icon: faGlobe, label: data.portfolio, isLink: true, display: "Portfolio" },
        linkedin: { icon: faLinkedin, label: data.linkedin, isLink: true, display: "Linkedin" },
        github: { icon: faGithub, label: data.github, isLink: true, display: "Github" }
    };

    const visible = style?.contact?.visibleFields || [];

    return (
        <div className="contactList" style={style?.contact?.box}>
            <h2 style={style?.contact?.heading}>Contact</h2>
            {visible.map((key, index) => {
                const field = contactFields[key];
                if (!field || !field.label) return null;

                return (
                    <div className="contactItem" style={style?.contact?.innerBox} key={index}>
                        <FontAwesomeIcon icon={field.icon} style={style?.contact?.icon} />
                        {field.isLink ? (
                            <a href={field.label} style={style?.contact?.anchor}>
                                {field.display}
                            </a>
                        ) : (
                            <p style={style?.contact?.content}>{field.label}</p>
                        )}
                    </div>
                );
            })}
        </div>
    )
}