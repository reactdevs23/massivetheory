import React from "react";
import { BioBg } from "../../images/image";
import styles from "./styles.module.css";

const Bio = () => {
  return (
    <section className={styles.wrapper}>
      <img src={BioBg} alt="#" className={styles.image} />
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          {" "}
          Jonathan Bartz is an award-winning composer based in Los Angeles. A
          life-long fan of filmmaking, Jonathan has a passion for collaborating
          with new and burgeoning film, television and other mediamakers.
        </p>
        <p className={styles.description}>
          {" "}
          Described as“uniquely talented,” (Guillermo Díaz, director)” “kind,
          genuine, shockingly intuitive” (Adam Sass, author) and “the preeminent
          collaborator” (Rob Matthews, director) Jonathan brings a fresh and
          singularly crafted sound to each project.
        </p>
        <p className={styles.description}>
          {" "}
          <span className={styles.highlight}>Humanity</span>,
          <span className={styles.highlight}>craftsmanship</span> ,
          <span className={styles.highlight}>exploration</span> and{" "}
          <span className={styles.highlight}> hot coffee</span> are at the heart
          of Jonathan’s soul and sound. Recently, Jonathan has enjoyed working
          on such iconic films as the recent Star Wars Trilogy (Star Wars: The
          Force Awakens, Star Wars: The Last Jedi, Star Wars: The Rise of
          Skywalker, LucasFilm) and Marvel’s Avengersseries (Avengers: Infinity
          War, Avengers: Endgame).
        </p>

        <p className={styles.description}>
          {" "}
          Other recent credits include Indiana Jones and the Dial of Destiny
          (James Mangold - LucasFilm), The Fabelmans (Steven Spielberg, Amblin),
          Lego Star Wars animated television series (Ken Cunningham - Disney+),
          and The Orville (Seth MacFarlane - Fuzzy Door Productions). He has
          worked with directors and artists from Steven Spielberg and J.J.
          Abrams to Cheyenne Jackson and Mariah Carey. His music has been heard,
          recorded, and performed across the United States from Carnegie Hall in
          New York City to the scoring stages of Los Angeles.
        </p>
      </div>
    </section>
  );
};

export default Bio;
