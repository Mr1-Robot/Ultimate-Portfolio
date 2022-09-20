import React from 'react'
import "./testimonials.css"
import AVIR1 from '../../assets/avatar1.jpg'
import AVIR2 from '../../assets/avatar2.jpg'
import AVIR3 from '../../assets/avatar3.jpg'
import AVIR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            title: "Ernest Achiever",
            img: AVIR1,
            p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatem ab officiis. Similique maiores consequatur explicabo earum commodi quod odio error, quae obcaecati excepturi cum numquam minus. Distinctio!",
        },

        {
            id: 2,
            title: "Ernest Achiever",
            img: AVIR2,
            p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatem ab officiis. Similique maiores consequatur explicabo earum commodi quod odio error, quae obcaecati excepturi cum numquam minus. Distinctio!",
        },

        {
            id: 3,
            title: "Ernest Achiever",
            img: AVIR3,
            p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatem ab officiis. Similique maiores consequatur explicabo earum commodi quod odio error, quae obcaecati excepturi cum numquam minus. Distinctio!",
        },

        {
            id: 4,
            title: "Ernest Achiever",
            img: AVIR4,
            p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatem ab officiis. Similique maiores consequatur explicabo earum commodi quod odio error, quae obcaecati excepturi cum numquam minus. Distinctio!",
        },
        ];

        return (
            <section name="testimonials">
                <h5>Review From Clients</h5>
                <h2>Testimonials</h2>

                <Swiper
                className="container testimonials__container mySwiper"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{
                    dynamicBullets: true,
                    clickable:true,
                }}
                >
                {testimonials.map(({ id, title, img, p }) => (
                    <SwiperSlide key={id} className="testimonials">
                    <div className="client__avatar">
                        <img src={img} alt="Avatar" />
                    </div>

                    <h5 className="client__name">{title}</h5>
                    <small className="client__review">{p}</small>
                    </SwiperSlide>
                ))}
                </Swiper>
            </section>
        );
}

export default Testimonials