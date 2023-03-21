import React, { useState } from "react";
import { CollaborationSide } from "../../images/image";
import SideImage from "../SideImage/SideImage";

import SocialContainer from "../SocialContainer/SocialContainer";
import styles from "./styles.module.css";

const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.contactDetails}>
        <h4 className={styles.title}>
          LET’S MAKE SOME <span className={styles.hightLight}>MUSIC</span>!
        </h4>
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.hightLight}`}>
            Amity Island Music
          </p>
          <p className={styles.text}>T: +1 (608) 346-9835</p>
          <p className={styles.text}>
            E:{" "}
            {/* <a
              href="mailto:someone@example.com"
              target="_blank"
              rel="noreferrer"
            > */}
            jonathan@amityislandmusic.com
            {/* </a>{" "} */}
          </p>
        </div>

        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.hightLight}`}>
            Jackson Agency
          </p>
          <p className={styles.text}>Kareen Wright</p>
          <p className={styles.text}>
            {" "}
            {/* <a href="mailto:kareen@tja.agency" target="_blank" rel="noreferrer"> */}
            kareen@tja.agency
            {/* </a>{" "} */}
          </p>
        </div>
        <SocialContainer />

        <form action="" className={styles.formContainer}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
              <label htmlFor="firstName" className={styles.label}>
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={values["firstName"]}
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={values["lastName"]}
                onChange={onChange}
                className={styles.input}
              />
            </div>
          </div>{" "}
          <div className={`${styles.inputContainer} ${styles.emailContainer}`}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values["email"]}
              onChange={onChange}
              className={styles.input}
            />
          </div>
          <div className={`${styles.inputContainer} ${styles.phoneContainer}`}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values["phone"]}
              onChange={onChange}
              className={styles.input}
            />
          </div>
          <div
            className={`${styles.inputContainer} ${styles.textAreaContainer}`}
          >
            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={values["message"]}
              onChange={onChange}
              className={`${styles.input} ${styles.textArea}`}
            ></textarea>
          </div>
          <button className={styles.button}>Submit</button>
        </form>

        <div className={styles.info}>
          <h4 className={styles.tagline}>PIVODIO</h4>
          <p className={styles.text}>
            Musicians! click{" "}
            <a href="#/" className={styles.hightLight}>
              here{" "}
            </a>
            to receive feedback from me on your work!
          </p>
        </div>
      </div>
      <SideImage image={CollaborationSide} />
    </section>
  );
};

export default Contact;
