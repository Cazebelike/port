import "./Testimonials.css";

import HeadingText from "../HeadingText/HeadingText";
import Card from "../../UI/Card";

import { testimonials } from "../../data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  return (
    <section>
      <HeadingText title={"My"} titlePrimary={"Teachers"} />

      <div className="container.testimonials-container">
        <Swiper
          className="testimoinals-wrapper"
          slidesPerView={1}
          spaceBetween={10}
        >
          {testimonials.map(({ id, img, name, des }) => {
            return (
              <SwiperSlide key={id}>
                <Card classname={"testimonial"}>
                  <img src={img} alt="" />
                  <h4>{name}</h4>
                  <p>{des}</p>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
