import React from "react";
//import { motion } from 'framer-motion'
import { styles } from "../styles";
import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
     
          <div
            className={`${styles.paddingX} absolute  top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5 `}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.sectionHeadText} text-white`}>
                Hi, I'm <span className="text-[#915eff]"> Ibrahim</span>
              </h1>
              <p className={`${styles.heroSubText} text-[#bbf7d0] mt-10`}>
                <b>From Bangladesh BD.</b>
            </p>
            <br/>
            <br />
             <Typed
                  strings={[
                    "I'm a Mern Stack Developer {}",
                    "I'm a React Native Developer {}",
                    "I,m a Programmer {}",
                    "I,m Learner {}",
                  ]}
                  typeSpeed={50}
                  backSpeed={40}
                  loop
              className={`${styles.heroSubText} mt-20 text-[#e879f9]`} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex justify-center items-center">
              <a href="/https://drive.google.com/file/d/1KNgUmNKF8o9geX9FyZvVhcx1ic1oM3zT/view?usp=sharing" className="px-6 py-5 rounded-lg text-white font-bold shadow-lg transition duration-300 ease-in-out transform hover:scale-110 bg-[#01baef] bg-blend-lighten
                 opacity-0.8">Download Resume</a>
              </div>
          </div>
          
        </div>
        
      </section>
    </>
  );
};

export default Hero;


