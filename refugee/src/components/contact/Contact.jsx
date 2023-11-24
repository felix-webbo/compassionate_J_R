import React from "react";
import css from "./Contact.module.scss";

import { CgMail } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerChildren } from "../utils/motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rq31way",
        "template_ehz8v68",
        form.current,
        "m-9R_HkRj7ZSXkFMr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div>
      <Navbar />
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div className={css.contactImage}>
          <motion.img
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            src="./Assets/picture5.jpg"
            alt="contactImage"
          />
          <h1>CONTACT US</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          className={css.heading}
        >
          <h5>Get In Touch</h5>
          <h2>Contact Us</h2>
        </motion.div>

        <div className={css.contact_container}>
          <div className={css.contact_options}>
            <motion.article
              variants={fadeIn("right", "tween", 0.2, 0.6)}
              className={css.contact_option}
            >
              <CgMail className={css.email_optionIcon} />
              <h4>Email</h4>
              <h5>felixwebbo.java@gmail..</h5>
              <a href="mailto:felixwebbo.java@gmail.com" target="_blank">
                Send a Message
              </a>
            </motion.article>

            <motion.article
              variants={fadeIn("right", "tween", 1, 0.6)}
              className={css.contact_option}
            >
              <BsMessenger className={css.messanger_optionIcon} />
              <h4>Messenger</h4>
              <h5>Felaferer ZakWebbo</h5>
              <a
                href="https://m.me/photo.php?fbid=693866569309111&set=a.305682961460809&type=3&comment_id=790026333124000&force_theater=true"
                target="_blank"
              >
                Send a Message
              </a>
            </motion.article>

            <motion.article
              variants={fadeIn("right", "tween", 1.8, 0.6)}
              className={css.contact_option}
            >
              <BsWhatsapp className={css.whatsapp_optionIcon} />
              <h4>whatsApp</h4>
              <h5>felixwebbo.java@gmail..</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+254113323746"
                target="_blank"
              >
                Send a Message
              </a>
            </motion.article>
          </div>

          <motion.form
            variants={fadeIn("left", "tween", 0.5, 0.6)}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Contact;
