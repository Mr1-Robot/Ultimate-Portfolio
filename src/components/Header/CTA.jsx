import React from 'react'
import CV from '../../assets/Muammar_Mohammed_CV.pdf'
import { Link } from 'react-scroll'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
            Download CV
            </a>
            <Link to="contact" smooth duration={1000}>
            <a href="#contact" className="btn btn-primary">
                Let's Talk
            </a>
            </Link>
        </div>
    );
}

export default CTA