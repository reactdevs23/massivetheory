import React from "react";
import { facebook, imdb, instagram, soundCloud } from "../../images/image";
import styles from "./styles.module.css";
const SocialContainer = () => {
  const socials = [
    { icon: instagram, to: "#" },
    { icon: facebook, to: "#" },
    { icon: imdb, to: "#" },
    { icon: soundCloud, to: "#" },
  ];
  return (
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
  );
};

export default SocialContainer;
