import React from "react";
import { animateScroll } from "react-scroll";

import {
  AboutBg,
  AboutSide,
  BackToTop,
  MobileBgAbout,
} from "../../images/image";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";
import SocialContainer from "../SocialContainer/SocialContainer";
import styles from "./styles.module.css";

const About = () => {
  return (
    <section className={styles.wrapper} id="about">
      <img
        src={AboutBg}
        alt="#"
        className={`${styles.image} ${styles.dekstopImage}`}
      />
      <img
        src={MobileBgAbout}
        alt="#"
        className={`${styles.image} ${styles.mobileImage}`}
      />
      <div className={styles.details}>
        <h2 className={styles.name}>Jonathan Bartz</h2>
        <p className={styles.position}>Composer</p>
        <SocialContainer />
      </div>
      <SideImage image={AboutSide} />
      <ScrollToNextSection nextSection="testimonial" />
      <img
        src={BackToTop}
        onClick={() => animateScroll.scrollToTop()}
        alt="#"
        className={styles.backtopTop}
      />
    </section>
  );
};

export default About;
