import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'


const Experience = () => {

    const articelsFrontend = [
        {
            id: 1,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'HTML',
            small: 'Advanced',
        },

        {
            id: 2,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'CSS',
            small: 'Advanced',
        },

        {
            id: 3,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'JavaScript',
            small: 'Intermediate',
        },

        {
            id: 4,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'Bootstrap',
            small: 'Advanced',
        },

        {
            id: 5,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'Tailwind',
            small: 'Intermediate',
        },

        {
            id: 6,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'React',
            small: 'Beginner'
        }
    ];

    const articelsBackend = [
        {
            id: 1,
            icon: <BsPatchCheckFill className='icons' />,
            title: 'DJango',
            small: 'Beginner',
        },

        {
            id: 2,
            icon : <BsPatchCheckFill className='icons' />,
            title: 'Python',
            small: 'Beginner'
        }
    ]

    return (
        <section name="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                {articelsFrontend.map(({ id, icon, title, small }) => (
                    <article key={id} className="experience__details">
                    {icon}
                    <div>
                        <h4>{title}</h4>
                        <small className="text-light">{small}</small>
                    </div>
                    </article>
                ))}
                </div>
            </div>

            <div className="experience__backend">
                <h3> Backend Development</h3>
                <div className="experinece__content">

                {articelsBackend.map(({ id, icon, title, small }) => (
                    <article key={id} className="experience__details">
                    { icon }
                    <div className="l">
                        <h4>{ title }</h4>
                        <small className="text-light">{ small }</small>
                    </div>
                    </article>
                ))}
                </div>
            </div>
            </div>
        </section>
    );
}

export default Experience