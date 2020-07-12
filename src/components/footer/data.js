import * as ROUTES from "@/scripts/constants/routes";
import ContactIcon from "@/assets/images/png/contact.png";
import AddressIcon from "@/assets/images/png/address.png";
import EmailIcon from "@/assets/images/png/email.png";

import FacebookIcon from "@/assets/images/png/social/facebook.png";
import TwitterIcon from "@/assets/images/png/social/twitter-256.png";
import LinkedInIcon from "@/assets/images/png/social/linkedin.png";
import InstagramIcon from "@/assets/images/png/social/instagram.png";

export const contactData = [
    {
        title: "Contact Us",
        description: "+91-40-29702989",
        link: "tel:+91-40-29702989",
        icon: ContactIcon,
    },
    {
        title: "Email",
        description: "info@ogivetechnology.com",
        link: "mailto:info@ogivetechnology.com",
        icon: EmailIcon,
    },
    {
        title: "Address",
        description: "Ogive Technology LLP, Plot No. 205-C,P&T Colony, Suncity Hyderabad - 500008. ",
        link: "https://goo.gl/maps/1JeemDT1eWC9bHT6A",
        icon: AddressIcon,
    },
];

export const quickLinksData = [
    {
        title: "Home",
        link: ROUTES.HOME,
    },
    {
        title: "Products",
        link: ROUTES.PRODUCTS,
    },
    {
        title: "Services & Solutions",
        link: ROUTES.SERVICES,
    },
    {
        title: "Industries",
        link: ROUTES.INDUSTRIES,
    },
    {
        title: "Contact Us",
        link: ROUTES.CONTACT_US,
    },
];

export const socialLinkData = [
    {
        link: "https://www.facebook.com/Ogive-Technology-485725495104947/",
        src: FacebookIcon,
    },
    {
        link: "https://twitter.com/OgiveTechnology",
        src: TwitterIcon,
    },
    {
        link: "https://www.linkedin.com/company-beta/13356002/",
        src: LinkedInIcon,
    },
    {
        link: "#",
        src: InstagramIcon,
    },
];
