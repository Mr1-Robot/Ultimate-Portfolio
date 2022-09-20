import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { useState } from 'react'


const Nav = () => {

    const [ activeNav, setActiveNav ] = useState('#');

    
    return (
        <nav>
            <Link
            to="home"
            span={true}
            duration={600}
            smooth
            onClick={() => setActiveNav('#')}
            className={activeNav === "#" ? "active" : ""}
            >
            <a href="/" className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome size={20} />
            </a>
            </Link>

            <Link
            to="about"
            smooth
            duration={700}
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
            >
            <a href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === "#about" ? "active" : ""}>
                <AiOutlineUser size={20} />
            </a>
            </Link>

            <Link
            to="experience"
            duration={800}
            smooth
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
            >
            <a href="#experience"
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}>
                <BiBook size={20} />
            </a>
            </Link>

            <Link to="services" duration={900} smooth
            onClick={() => setActiveNav('#services')}
            className={activeNav === '#services' ? 'active' : ''}>
            <a href="#services"
            className={activeNav === '#services' ? 'active' : ''}>
                <RiServiceLine size={20} />
            </a>
            </Link>

            <Link to="contact" smooth duration={1000}
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}>
            <a href="#contact"
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail size={20} />
            </a>
            </Link>
        </nav>
    );
}

export default Nav