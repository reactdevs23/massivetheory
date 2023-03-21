import React, { useEffect } from "react";
import {
  MusicSide,
  shopify,
  slides1,
  slides2,
  slides3,
  slides4,
} from "../../images/image";
import Swiper, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.css";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";

const Music = () => {
  const slides = [
    { img: slides1 },
    { img: slides2 },
    { img: slides3 },
    { img: slides4 },
    { img: slides1 },
    { img: slides2 },
    { img: slides3 },
    { img: slides4 },
  ];
  useEffect(() => {
    let swiper = new Swiper(".mySwiper", {
      modules: [Autoplay, Navigation],

      direction: "horizontal",
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 2,
        },
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);
  return (
    <section className={styles.wrapper} id="music">
      <div className={styles.sliderWrapper}>
        <div className={styles.mySlider}>
          <div className={`swiper mySwiper`}>
            <div className="swiper-wrapper" style={{ padding: "0 100px" }}>
              {slides.map((el, i) => {
                return (
                  <div key={i} className="swiper-slide">
                    <img src={el.img} alt="#" className={styles.slides} />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${styles.swiperButtonPrevs} swiper-button-prev`}
          ></div>
          <div
            className={`${styles.swiperButtonNexts} swiper-button-next`}
          ></div>
        </div>
      </div>

      <div className={styles.iframeContainer}>
        <img src={shopify} alt="#" className={styles.shopify} />
        <iframe
          title="music"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/0AbB4b3SMlb6bYhyFXJ9SG?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <ScrollToNextSection nextSection="bio" />
      <SideImage image={MusicSide} />
    </section>
  );
};

export default Music;
