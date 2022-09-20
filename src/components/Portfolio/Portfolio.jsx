import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {

    const articles = [
        {
            id: 1,
            img: IMG1,
            title: "Crypto Currency & Financial Visualization",
            href1: "https://github.com/Mr1-Robot",
            href2: "https://codepen.io",
        },

        {
            id: 2,
            img: IMG2,
            title: "Charts templates & inforgraphics in Figma",
            href1: "https://github.com/Mr1-Robot",
            href2: "https://codepen.io",
        },

        {
            id: 3,
            img: IMG3,
            title: "Figma Dashboard UI kit for data design web apps",
            href1: "https://github.com/Mr1-Robot",
            href2: "https://codepen.io",
        },

        {
            id: 4,
            img: IMG4,
            title: "Maintaining tasks and tracking progress",
            href1: "https://github.com/Mr1-Robot",
            href2: "https://codepen.io",
        },

        {
            id: 5,
            img: IMG5,
            title: "Charts templates & infographics in Figma",
            href1: "https://github.com/Mr1-Robot",
            href2: "https://codepen.io",
        },

        {
            id: 6,
            img: IMG6,
            title: "Charts templates & infographics in Figma",
            href1: "https://github.com/Mr1-Robot",
            href2: "https://codepen.io",
        },
    ];

    return (
        <section name="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
            {articles.map(({ id, img, title, href1, href2 }) => (
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                    <img src={img} alt="#" />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio__item-cta">
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href={ href1 }
                    className="btn"
                    >
                    Github
                    </a>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href={ href2 }
                    className="btn btn-primary"
                    >
                    Live Demo
                    </a>
                </div>
                </article>
            ))}
            </div>
        </section>
    );
}

export default Portfolio