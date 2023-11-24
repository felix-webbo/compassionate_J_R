import React from "react";
import Navbar from "../navbar/Navbar";
import css from "./Home.module.scss";
import { staggerContainer } from "../utils/motion";
//import { fadeIn } from "../utils/motion";
//import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import "swiper/css";
//import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay } from "swiper/modules"; // Swiper JS Core
import { Swiper, SwiperSlide } from "swiper/react"; // React components for Swiper
import { SwiperObject } from "../SwiperObject";
import MissionData from "../MissionData";
import People from "../people/People";
import Footer from "../footer/Footer";

SwiperCore.use([Autoplay]);

function Home() {
  return (
    <div>
      <Navbar />
      <section className={`paddings ${css.wrapper}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`innerWidth ${css.container}`}
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className={`yPaddings flexCenter ${css.topText}`}
          >
            <h3>Join Us in Supporting Refugee</h3>
          </motion.div>

          <div className={css.flexContainer}>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className={css.leftSide}
            >
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className={css.swiperContainer}
              >
                {SwiperObject.map((object, index) => (
                  <SwiperSlide key={index}>
                    <div className={css.objectSlide}>
                      <h2>{object.title}</h2>
                      <p>{object.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            <div className={css.rightSide}>
              <motion.img
                variants={fadeIn("right", "tween", 0.2, 1)}
                src="./Assets/picture6.jpg"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </section>
      <MissionData />
      <People />
      <Footer />
    </div>
  );
}

export default Home;
