import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineTwitter } from "react-icons/ai";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
            </a>
            <a href="https://github.com/Mr1-Robot" target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
            </a>
        </div>
    );
}

export default HeaderSocial