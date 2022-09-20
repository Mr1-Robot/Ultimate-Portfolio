import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {

    const listItems = [
        {
            id: 1,
            icon: <BiCheck className="services__list-icon"/>,
            dummyText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem!",
        },

        {
            id: 2,
            icon: <BiCheck className="services__list-icon"/>,
            dummyText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem!",
        },
        {
            id: 3,
            icon: <BiCheck className="services__list-icon"/>,
            dummyText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem!",
        },
        {
            id: 4,
            icon: <BiCheck className="services__list-icon"/>,
            dummyText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem!",
        },
        {
            id: 5,
            icon: <BiCheck className="services__list-icon"/>,
            dummyText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, exercitationem!",
        },
    ];

    return (
        <section name="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
            {/* UI/UX THINGS  */}
            <article className="services">
                <div className="services__head">
                <h3>UI/UX Design</h3>
                </div>

                <ul className="services__list">
                {listItems.map(({ id, icon, dummyText }) => (
                    <li key={id}>
                    {icon}
                    <p>{dummyText}</p>
                    </li>
                ))}
                </ul>
            </article>
            {/*END UI/UX THINGS  */}

            {/* WEB DEVELOPMENT  */}
            <article className="services">
                <div className="services__head">
                <h3>Web Development</h3>
                </div>

                <ul className="services__list">
                {listItems.map(({ id, icon, dummyText }) => (
                    <li key={id}>
                    {icon}
                    <p>{dummyText}</p>
                    </li>
                ))}
                </ul>
            </article>
            {/* WEB DEVELOPMENT  */}

            {/* CONTENT CREATION  */}
            <article className="services">
                <div className="services__head">
                <h3>Content Creation</h3>
                </div>

                <ul className="services__list">
                {listItems.map(({ id, icon, dummyText }) => (
                    <li key={id}>
                    {icon}
                    <p>{dummyText}</p>
                    </li>
                ))}
                </ul>
            </article>
            {/* CONTENT CREATION  */}
            </div>
        </section>
    );
}

export default Services