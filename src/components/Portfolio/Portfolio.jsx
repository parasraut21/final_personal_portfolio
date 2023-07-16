import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import grammer from "../../img/grammer.png";
import note from "../../img/note.png";
import news from "../../img/news.png";
import car from "../../img/car.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://parasraut21.github.io/grammer/" target={"_blank"} >    <img src={grammer} alt="" height={"220rem"} width={"100rem"}/></a> 
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://parasraut21.github.io/news-react/" target={"_blank"} >   <img src={news} alt="" height={"220rem"} width={"100rem"} /></a> 
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://parasraut21.github.io/CARZY_CARS.github.io/" target={"_blank"} >   <img src={car} alt="" height={"220rem"} width={"100rem"} /></a> 
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://ur-notebook.netlify.app/#/login" target={"_blank"} ><img src={note} alt=""  height={"220rem"} width={"100rem"}/></a> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
