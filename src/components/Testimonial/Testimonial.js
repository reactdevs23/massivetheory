import React, { useEffect } from "react";
import { TestimonialBg, TestimonialSide } from "../../images/image";
import Swiper, { Autoplay, Navigation } from "swiper";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/navigation";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";

const Testimonial = () => {
  const slides = [
    {
      description:
        "Jonathan is an incredible musical talent - he will undoubtedly be my first choice composer on any project I direct. I truly believe he will go on to become one of the great film/tv composer of our generation.",
      name: "Rob Matthews",
      position: "Award-Winning Director, Beanstalk Films",
    },
    {
      description:
        "Jonathan is an incredible musical talent - he will undoubtedly be my first choice composer on any project I direct. I truly believe he will go on to become one of the great film/tv composer of our generation.",
      name: "Rob Matthews",
      position: "Award-Winning Director, Beanstalk Films",
    },
    {
      description:
        "Jonathan is an incredible musical talent - he will undoubtedly be my first choice composer on any project I direct. I truly believe he will go on to become one of the great film/tv composer of our generation.",
      name: "Rob Matthews",
      position: "Award-Winning Director, Beanstalk Films",
    },
  ];

  useEffect(() => {
    let swiper = new Swiper(".descriptionSwiper", {
      modules: [Autoplay, Navigation],

      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);
  return (
    <section className={styles.wrapper} id="testimonial">
      <img src={TestimonialBg} alt="#" className={styles.image} />
      <div className={styles.mySlider}>
        <div className={`swiper descriptionSwiper`}>
          <div className="swiper-wrapper">
            {slides.map((el, i) => {
              return (
                <div key={i} className="swiper-slide">
                  <div className={styles.descriptionContainer}>
                    <p className={styles.description}> {el.description}</p>

                    <div className={styles.nameAndPostion}>
                      <p className={styles.name}>{el.name}</p>
                      <p className={styles.position}>{el.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`${styles.swiperButtonPrev} swiper-button-prev`}
          ></div>
          <div
            className={`${styles.swiperButtonNext} swiper-button-next`}
          ></div>
        </div>
      </div>
      <SideImage image={TestimonialSide} />
      <ScrollToNextSection nextSection="music" />
    </section>
  );
};

export default Testimonial;
