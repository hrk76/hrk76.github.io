import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: `NAME`,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat neque laboriosam nisi reprehenderit aspernatur, porro nulla assumenda repellendus ea, maiores delectus ut beatae sapiente quod numquam perspiciatis minus nihil. Suscipit?",
  },
  {
    avatar: AVTR2,
    name: `NAME`,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat neque laboriosam nisi reprehenderit aspernatur, porro nulla assumenda repellendus ea, maiores delectus ut beatae sapiente quod numquam perspiciatis minus nihil. Suscipit?",
  },
  {
    avatar: AVTR3,
    name: `NAME`,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat neque laboriosam nisi reprehenderit aspernatur, porro nulla assumenda repellendus ea, maiores delectus ut beatae sapiente quod numquam perspiciatis minus nihil. Suscipit?",
  },
  {
    avatar: AVTR4,
    name: `NAME`,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat neque laboriosam nisi reprehenderit aspernatur, porro nulla assumenda repellendus ea, maiores delectus ut beatae sapiente quod numquam perspiciatis minus nihil. Suscipit?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
