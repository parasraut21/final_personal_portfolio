import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import pp from "../../img/pp.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: pp,
      review:
        "Currently pursuing a B.Tech in Computer Engineering at MIT-World Peace University , Strong passion for web development and proficient in coding languages, including HTML, CSS, JavaScript, Node.js, MongoDB, solidity and MySQL. Experienced in problem-solving, with the ability to collaborate effectively with others. Adaptable to learning and working with new technologies and programming languages.Skilled in utilizing React framework for web development projects.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About Me </span>
        
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
