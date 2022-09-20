import React from 'react'
import './footer.css'
import { Link } from 'react-scroll' 
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {

    const footerLinks = [
        {
            id: 1,
            title: "Home",
            href: 'home',
        },

        {
            id: 2,
            title: "About",
            href: 'about',
        },

        {
            id: 3,
            title: 'Experience',
            href: 'experience',
        },

        {
            id: 4,
            title: 'Services',
            href: 'services',
        },

        {
            id: 5,
            title: 'Portfolio',
            href: 'portfolio',
        },

        {
            id: 6,
            title: "Testimonials",
            href: 'testimonials',
        },

        {
            id: 7,
            title: 'Contact',
            href: 'contact',
        }

    ];

    const footerSocials = [
        {
            id: 1,
            title: "Facebook",
            img: (
            <>
                <FaFacebook className="footer__icons" />
            </>
            ),
            href: "https://www.facebook.com/moamer.mohamed.509",
        },

        {
            id: 2,
            title: "Instagram",
            img: (
            <>
                <FiInstagram className="footer__icons" />
            </>
            ),
            href: "https://www.instagram.com/mo3mer1/",
        },

        {
            id: 3,
            title: "Linkedin",
            img: (
            <>
                <IoLogoTwitter className="footer__icons" />
            </>
            ),
            href: "https://linkedin.com/in/mr1robot",
        },
        ];

        return (
        <section name="footer" className="footer">
            <Link to="home" duration={600} smooth className='logo'>
            <a href="/#" className="footer__logo">
                Mr.RoboT
            </a>
            </Link>

            <ul className="permalinks">
            {footerLinks.map(({ id, title, href }) => (
                <li key={id}>
                <Link to={href} duration={600} smooth>
                    <a href={href}>{title}</a>
                </Link>
                </li>
            ))}
            </ul>

            <div className="footer__socials">
            {footerSocials.map(({ id, title, img, href }) => (
                <a key={id} href={href} target="_blank" rel="noreferrer">
                {img}
                {title}
                </a>
            ))}
            </div>

            <div className="footer__copyright">
            <small>&copy; Mr.Robot. All rights reserved.</small>
            </div>
        </section>
    );
}

export default Footer