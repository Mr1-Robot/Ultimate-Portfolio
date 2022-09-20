import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
                .sendForm(
                    "service_arboipo",
                    "template_71soekx",
                    form.current,
                    "CCdMojjsGPga2YP-1"
                )
                .then(
                    (result) => {
                    console.log(result.text);
                    },
                    (error) => {
                    console.log(error.text);
                    }
                );
                e.target.reset();
        };

    const contactArr = [
        {
            id: 1,
            img: (
            <>
                <MdOutlineEmail className='contact__option-icon' />
            </>
            ),
            title: "Email",
            desc: "robotmr969@gmail.com",
            href: "mailto:robotmr969@gmail.com",
        },

        {
            id: 2,
            img: (
            <>
                <RiMessengerLine className='contact__option-icon' />
            </>
            ),
            title: "Messenger",
            desc: "Moamer Mohamed",
            href: "https://www.facebook.com/messages/t/100021291405814",
        },

        {
            id: 3,
            img: (
            <>
                <BsWhatsapp className='contact__option-icon' />
            </>
            ),
            title: "WhatsApp",
            desc: "+964 771 288 5482",
            href: "https://wa.me/+9647712885482",
        },
    ];

    return (
        <section name="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
            <div className="contact__options">
                {contactArr.map(({ id, img, title, desc, href }) => (
                <article key={id} className="contact__option">
                    { img }
                    <h4>{ title }</h4>
                    <h5>{ desc }</h5>
                    <a href={ href }
                    target='_blank'
                    rel='noreferrer'>Send a message</a>
                </article>
                ))}
            </div>

            <form ref={ form } onSubmit={ sendEmail }>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
            </div>
        </section>
    );
}

export default Contact