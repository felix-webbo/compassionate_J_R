import css from "./Footer.module.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.top}>
        <div className={css.imageLogo}>
          <img src="./Assets/nav-logo.png" alt="" />
          <p>Choose Your Favorite Destination.</p>
        </div>
        <div className={css.icons}>
          <a href="">
            <AiFillLinkedin />
          </a>
          <a href="">
            <BsFacebook />
          </a>
          <a href="">
            <AiFillTwitterCircle />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <div className={css.bottom}>
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licences</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twiter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">Ptivacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
