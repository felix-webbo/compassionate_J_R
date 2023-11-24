import { useRef, useState } from "react";
import css from "./Navbar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../utils/motion";
import useHeaderShadow from "../hooks/useHeaderShadow";
import useOutSideAlerter from "../hooks/useOutSideAlerter";
function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutSideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={css.navBarOne}>
        <div>
          <SiConsul className={css.icon} />
        </div>

        <div className={css.flex}>
          <li>
            {" "}
            <BsPhoneVibrate className={css.icon} />
          </li>
          <li>
            {" "}
            <AiOutlineGlobal className={css.icon} />
          </li>
        </div>

        <div className={css.flex2}>
          <Link to="/switch">
            <span>Sign Up</span>
          </Link>
          <span></span>
        </div>
      </div>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.navLogo}>
          <img src="./Assets/nav-logo.png" alt="" />
          <figcaption className={css.logoText}>
            <h3 className="text">
              COMPASSIONATE JOURNEY
              <br /> REFUGEE
            </h3>
            <p>Charity Trust</p>
          </figcaption>
        </div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/program">Approach</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <div className={css.donate}>
            <li>
              <Link to="/donate">
                <span>DONATE</span>
                <span>DONATE</span>
              </Link>
            </li>
          </div>
        </ul>

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={"30px"} />
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
