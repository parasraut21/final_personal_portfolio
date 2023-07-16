import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";

import nodejs from "../../img/nodejs.png";

import sol from "../../img/sol.png";
import py from "../../img/py.jpg";
import mdbb from "../../img/mdbb.jpg";
import jsss from "../../img/jsss.png";
import java from "../../img/java.png";
import cpp from "../../img/cpp.png";
import react from "../../img/react.png";
import mysql from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills
          </span>
          <span>English | Hindi | Marathi</span>
          <spane>
          C
          <br />
          Solidity
          <br />
          ReactJs
            <br />
           NodeJs
            <br />
          Javascript
            <br />
          Mysql
          <br />
          MongoDB
          <br />
          Python
          <br />
          Bootstrap
          <br />
          Redux
          <br />
          Version Control
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-secCircle pp">
            <img src={py} alt="" height={"146rem"} />
          </div>
          <div className="w-secCircle pps">
            <img src={mysql} alt="" height={"146rem"} />
          </div>
          <div className="w-secCircle ppss">
            <img src={mdbb} alt="" height={"146rem"} />
          </div>
          <div className="w-secCircle ppsss">
            <img src={java} alt="" height={"115rem"} />
          </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={cpp} alt=""height={"152rem"} />
          </div>
          <div className="w-secCircle">
            <img src={sol} alt="" height={"152rem"} />
          </div>
          <div className="w-secCircle" >
            <img src={jsss} alt="" height={"148rem"} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={react} alt=""  height={"152rem"}/>
          </div>
         
          <div className="w-secCircle">
            <img src={nodejs} alt=""  height={"152rem"}/>
          </div>
          
        
         
        </motion.div>
      
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
