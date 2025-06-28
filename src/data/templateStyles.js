import { faCloudSun, faCode } from "@fortawesome/free-solid-svg-icons";
import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";

const sharedStyles = {

};

const templateStyles = {
    "1": {
        contact: {

        },
        skills: {

        },
        projects: {
            // icon: faCloudSun ,
            list: {
                // listStyle: 'none',
                marginLeft: '1rem'
            },
            bulletIcon: {
                display: 'none',
                fontSize: '0.5rem',
                marginRight: '0.5rem'
            },
            link: {
                marginRight: '1rem'
            }
        },
        education: {
            useCustomBullets: false,
            // icon: faCircleCheck,
            list: {
                marginLeft: '1rem'
            },
            bulletIcon: {
                // color: 'green',
                display: 'none',
            },
        },
        workExperience: {
            useCustomBullets: false,
            list: {
                marginLeft: '1rem'
            }
        },
        contact: {
            list: { listStyle: "none", padding: 0, margin: 0 },
            icons: {
                email: faEnvelope,
                phoneNo: faPhone,
                address: faLocationDot,
                github: faGithub,
                linkedin: faLinkedin,
                portfolio: faEnvelope,
                skype: faSkype,
            },
        }

    },
}

export default templateStyles;