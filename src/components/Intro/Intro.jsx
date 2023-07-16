import React, { useState, useEffect,useContext } from 'react';
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import paras_photo_edit from "../../img/paras_photo_edit.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';

const Intro = () => {
  // const words = 'Web Designer,Web Developer,Blockchain Developer,Full Stack Developer,Mern Stack Developer';
  
 


  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Paras Raut</span>
          <span>
          Developer with high level of experience in   <div className="typewriter">
          <Typewriter
  options={{
    strings: ['Mern Stack Development', 'Blockchain Development','Freelancing','Web Designing'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
        
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/parasraut21" target={"_blank"} ><img src={Github} alt="https://github.com/parasraut21"/></a>  
        <a href="https://www.linkedin.com/in/paras-raut/" target={"_blank"} ><img src={LinkedIn} alt="https://www.linkedin.com/in/paras-raut/" /></a> 
          <a href="https://www.instagram.com/parasraut_2511/" target={"_blank"} > <img src={Instagram} alt="" /></a> 
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={paras_photo_edit} alt="" width={"300rem"} height={"300rem"} />
        {/* animation */}
        <motion.img
          initial={{ left: "-20%" }}
          whileInView={{ left: "-58%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        >
        </motion.img>

        <motion.div
           initial={{ top: "9rem" ,left: "25rem"}}
           whileInView={{ top: "0rem" , left:"0px" }}
           transition={transition}
           className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Freelancer" className="custom-font-size" />
        </motion.div>


        <motion.div
          initial={{ top: "18rem", left: "74%" }}
          whileInView={{ left: "68%" , top:"0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "11rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Blockchain" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
     
    </div>
  );
};

export default Intro;
