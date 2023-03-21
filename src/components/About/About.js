import React from "react";

import {
  AboutBg,
  facebook,
  imdb,
  instagram,
  soundCloud,
  MobileBgAbout,
} from "../../images/image";
import styles from "./styles.module.css";

const About = () => {
  const socials = [
    { icon: instagram, to: "#" },
    { icon: facebook, to: "#" },
    { icon: imdb, to: "#" },
    { icon: soundCloud, to: "#" },
  ];
  return (
    <section className={styles.wrapper}>
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
        <div className={styles.socialContainer}>
          {socials.map((el, i) => (
            <img
              key={i}
              src={el.icon}
              alt="#"
              to={el.to}
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
