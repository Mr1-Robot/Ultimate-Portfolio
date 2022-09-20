import React from 'react'
import "./about.css"
import Me from '../../assets/mrrobot.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section name="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                <img src={Me} alt="" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                <article className="about__card">
                    <FaAward className="about__icon" />
                    <h5>Experience</h5>
                    <small>3+ years working</small>
                </article>

                <article className="about__card">
                    <FiUsers className="about__icon" />
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                </article>

                <article className="about__card">
                    <VscFolderLibrary className="about__icon" />
                    <h5>Projects</h5>
                    <small>80+ Completed</small>
                </article>
                </div>

                <p>
                Front-end Developer completed 3 - 4 projects in CompuTIQ company,
                UI/UX designer with FIGMA. Worked in the Social Media Marketing
                “Facebook, Instagram” and managed campaigns with a good result in
                sailing and designing for each page like logos, post content, and
                specific words. Worked in the Fajr-Baghdad company in marketing
                and managing their social media accounts and campaigns.
                </p>

                <Link to="contact" smooth duration={1000}>
                <a href="/" className="btn btn-primary">
                    Let's Talk
                </a>
                </Link>
            </div>
            </div>
        </section>
    );
}

export default About