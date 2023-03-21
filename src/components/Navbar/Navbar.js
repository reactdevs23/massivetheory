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
    <section className={styles.navbar}>
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

      <div className={`${styles.navItems} ${sidebar && styles.sidebar}`}>
        {navItems.map((el, i) => (
          <Link
            to={el.to}
            className={styles.navItem}
            key={i}
            activeClass={styles.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setSidebar(false)}
          >
            {el.navItem}{" "}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Navbar;
