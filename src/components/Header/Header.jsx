import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <header name="home">
            <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1 style={{ textTransform: "capitalize" }}>muammar m. Abdullah</h1>
            <h5 className="text-light">Front End Developer</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
                <img src={ME} alt="" style={{ borderRadius: "0 0 2% 2%" }} />
            </div>

            <Link to="about" duration={500} smooth>
                <a href="#contact" className="scroll__down">
                Scroll Down
                </a>
            </Link>
            </div>
        </header>
    );
}

export default Header