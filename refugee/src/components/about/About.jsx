import React from "react";
import Navbar from "../navbar/Navbar";
import css from "./About.module.scss";
import Footer from "../footer/Footer";

import { MdOutgoingMail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/motion";

function About() {
  return (
    <div>
      <Navbar />
      <section className={css.wrapper}>
        <div className={css.aboutImage}>
          <img src="./Assets/picture2.jpg" alt="aboutImage" />
          <div className={css.text}>
            <h1 className="primaryText">About Us</h1>
            <p className="secondaryText">
              At Compassionate Journey Refugee we believe in the transformative
              power of compassionate and solidarity. We are a passionate team os
              advocates, driven by a singular mission to champion the rights and
              dignity of the refugees worldwide
            </p>
          </div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.statistics}`}
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="primaryText"
            >
              Statistics
            </motion.h1>
            <div className={css.stats}>
              <motion.div
                variants={fadeIn("right", "tween", 0.3, 0.6)}
                className={css.stat}
              >
                <h3 className="primaryText">+82.4M</h3>
                <p className="secondaryText">
                  Did you know that there were approximately 82.4 million
                  forcebly displaced people worldwide, including refugees,
                  aslum-seekers, and internally displaced persons (IDPs). This
                  number has been steadly increasing over the years.{" "}
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.8, 0.6)}
                className={css.stat}
              >
                <h3 className="primaryText">DEF</h3>
                <p className="secondaryText">
                  According to the United Nations, a refugee is someone who has
                  been forced to flee their home country because of persecution,
                  war, or violence and has a well-founded fear of persecution
                  based on race, religion, nationality, political optio, or
                  membership in a particular social group.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("left", "tween", 0.3, 0.6)}
                className={css.stat}
              >
                <h3 className="primaryText">FACT</h3>
                <p className="secondaryText">
                  Kenya is among countries with limited resources that often
                  host the largest number of refugees.{" "}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.people}`}
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className={css.creativeTeam}
            >
              <h1 className="primaryText">Our Creative Team</h1>
              <p className="secondaryText">
                Together We Fight For The Rights Of The Refugees{" "}
              </p>
            </motion.div>
            <div className={css.coTeam}>
              <div className={css.team}>
                <motion.img
                  variants={fadeIn("right", "tween", 0.2, 0.6)}
                  src="./Assets/simeon.jpg"
                  alt="image"
                />
                <div className={css.card}>
                  <div className={css.name}>
                    <h3>Simeon Maranga</h3>
                    <h5>advocator</h5>
                  </div>
                  <div className={css.line1}></div>
                  <p className="">
                    Overseeing the overall operations and strategic direction of
                    the organisation.
                  </p>

                  <div className={css.line2}></div>
                  <div className={css.socials}>
                    <a href="mailto: felixwebbo.java@gmail.com">
                      <MdOutgoingMail className={css.emailIcon} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=+254113323746"
                      target="_blank"
                    >
                      <FaSquareWhatsapp className={css.whatsappIcon} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={css.team}>
                <motion.img
                  variants={fadeIn("right", "tween", 0.5, 0.6)}
                  src="./Assets/antony.jpg"
                  alt="image"
                />
                <div className={css.card}>
                  <div className={css.name}>
                    <h3>Antony Massu</h3>
                    <h5>advocator</h5>
                  </div>
                  <div className={css.line1}></div>
                  <p className="">
                    Overseeing the financial matters, particulary related to the
                    company funds, investments, and financial planning.
                  </p>

                  <div className={css.line2}></div>
                  <div className={css.socials}>
                    <a href="mailto: felixwebbo.java@gmail.com">
                      <MdOutgoingMail className={css.emailIcon} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=+254113323746"
                      target="_blank"
                    >
                      <FaSquareWhatsapp className={css.whatsappIcon} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={css.team}>
                <motion.img
                  variants={fadeIn("right", "tween", 0.8, 0.6)}
                  src="./Assets/kennedy.jpg"
                  alt="image"
                />
                <div className={css.card}>
                  <div className={css.name}>
                    <h3>Kennedy Ochieng</h3>
                    <h5>advocator</h5>
                  </div>
                  <div className={css.line1}></div>
                  <p className="">
                    Assists the CEO in overseeing the overall operations and
                    stragetic direction of the organization.
                  </p>

                  <div className={css.line2}></div>
                  <div className={css.socials}>
                    <a href="mailto: felixwebbo.java@gmail.com">
                      <MdOutgoingMail className={css.emailIcon} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=+254113323746"
                      target="_blank"
                    >
                      <FaSquareWhatsapp className={css.whatsappIcon} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={css.team}>
                <motion.img
                  variants={fadeIn("right", "tween", 1.1, 0.6)}
                  src="./Assets/carel.jpg"
                  alt="image"
                />
                <div className={css.card}>
                  <div className={css.name}>
                    <h3>Carel Omwoyo</h3>
                    <h5>advocator</h5>
                  </div>
                  <div className={css.line1}></div>
                  <p className="">
                    The chairman shall preside at all meetings of the trustees,
                    shall be responsible for the execution of policies
                    established by the trustees, and the administration of the
                    trust.
                  </p>

                  <div className={css.line2}></div>
                  <div className={css.socials}>
                    <a href="mailto: felixwebbo.java@gmail.com">
                      <MdOutgoingMail className={css.emailIcon} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=+254113323746"
                      target="_blank"
                    >
                      <FaSquareWhatsapp className={css.whatsappIcon} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={css.team}>
                <motion.img
                  variants={fadeIn("right", "tween", 1.4, 0.6)}
                  src="./Assets/austine.jpg"
                  alt="image"
                />
                <div className={css.card}>
                  <div className={css.name}>
                    <h3>Austin Bodi</h3>
                    <h5>advocator</h5>
                  </div>
                  <div className={css.line1}></div>
                  <p className=""></p>

                  <div className={css.line2}></div>
                  <div className={css.socials}>
                    <a href="mailto: felixwebbo.java@gmail.com">
                      <MdOutgoingMail className={css.emailIcon} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=+254113323746"
                      target="_blank"
                    >
                      <FaSquareWhatsapp className={css.whatsappIcon} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={css.team}>
                <motion.img
                  variants={fadeIn("right", "tween", 1.7, 0.6)}
                  src="./Assets/webbo.jpg"
                  alt="image"
                />
                <div className={css.card}>
                  <div className={css.name}>
                    <h3>Felix Webbo</h3>
                    <h5>advocator</h5>
                  </div>
                  <div className={css.line1}></div>
                  <p className="">
                    Incharge of the website updates, Maintenance, and
                    implementation to ensure the website always functioning as
                    per customer requirement .
                  </p>

                  <div className={css.line2}></div>
                  <div className={css.socials}>
                    <a href="mailto: felixwebbo.java@gmail.com">
                      <MdOutgoingMail className={css.emailIcon} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=+254113323746"
                      target="_blank"
                    >
                      <FaSquareWhatsapp className={css.whatsappIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
