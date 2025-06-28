import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    const { data, style } = useResume();
    const contact = data.contact || {};
    const contactOrder = style?.contact?.order || Object.keys(contact);

    return (
        <div className="contactSection" style={style?.contact?.box}>
            <h2 style={style?.contact?.heading}>Contact</h2>
            <ul style={style?.contact?.list}>
                {contactOrder.map((key, index) => {
                    const value = contact[key];
                    const icon = style?.contact?.icons?.[key];

                    if (!value) return null;

                    const isLink =
                        key === "email" ||
                        key === "github" ||
                        key === "linkedin" ||
                        key === "portfolio" ||
                        key === "skype";

                    const href =
                        key === "email"
                            ? `mailto:${value}`
                            : key === "skype"
                            ? `skype:${value}?chat`
                            : value;

                    return (
                        <li key={index} style={style?.contact?.item}>
                            {icon && (
                                <FontAwesomeIcon
                                    className="FAIcon"
                                    icon={icon}
                                    style={style?.contact?.icon}
                                />
                            )}
                            {isLink ? (
                                <a
                                    href={href}
                                    style={style?.contact?.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {value}
                                </a>
                            ) : (
                                <span style={style?.contact?.text}>{value}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
