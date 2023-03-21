import React, { useState } from "react";
import { Link } from "react-scroll";
import { hamburger } from "../../images/image";
import styles from "./styles.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    { navItem: "ABOUT", to: "about" },
    { navItem: "TESTIMONIAL", to: "testimonial" },
    { navItem: "MUSIC", to: "music" },
    { navItem: "bio", to: "bio" },
    { navItem: "Collaboration", to: "contact" },
  ];
  return (
    <>
      {sidebar ? (
        <p class={styles.close} onClick={() => setSidebar((prev) => !prev)}></p>
      ) : (
        <img
          src={hamburger}
          alt="#"
          className={styles.hamburger}
          onClick={() => setSidebar((prev) => !prev)}
        />
      )}
      <section className={`${styles.navbar} ${sidebar && styles.sidebar}`}>
        <div className={`${styles.navItems} `}>
          {navItems.map((el, i) => (
            <Link
              to={el.to}
              className={styles.navItem}
              key={i}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setSidebar(false)}
            >
              {el.navItem}{" "}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Navbar;
