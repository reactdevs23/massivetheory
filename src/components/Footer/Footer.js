import React from "react";
import { owner } from "../../images/image";
import SocialContainer from "../SocialContainer/SocialContainer";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <img src={owner} alt="#" className={styles.owner} />
      <SocialContainer />
      <p className={styles.text}>2023 JONATHANBARTZ.COM ALL RIGHTS RESERVED</p>
    </section>
  );
};

export default Footer;
