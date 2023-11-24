import React, { Component } from "react";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren, fadeIn } from "../utils/motion";
import { comments } from "../utils/data";
import { sliderSettings } from "../utils/data";
import Slider from "react-slick";

class People extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    return (
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div
          variants={footerVariants}
          className={`yPaddings innerWidth ${css.container}`}
        >
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 2)}
            className={`flexCenter ${css.heading}`}
          >
            <span className="primaryText">Our Team</span>
            <p style={{ marginTop: "2rem" }}>
              More About Our Strong, United and Supportive Team
            </p>
            <p>Refugees welfare is our priority</p>
          </motion.div>

          <div className={`yPaddings ${css.comments}`}>
            <Slider
              ref={(slider) => (this.slider = slider)}
              {...sliderSettings}
              className={css.slider}
            >
              {comments.map((comment, index) => {
                return (
                  <div className={`flexCenter ${css.comment}`} key={index}>
                    <img src={comment.img} alt="" />
                    <p>{comment.comment}</p>

                    <div className={css.line}></div>

                    <div className={css.bio}>
                      <span>{comment.name} </span>
                      <span>{comment.post}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </motion.section>
    );
  }
}
export default People;
