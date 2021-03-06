import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Testimonials, Brands } from "../../model/interface";

import { client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);

  const handleClick = (e: number) => {
    setCurrentIndex(e);
  };

  useEffect(() => {
    const query =
      '*[_type == "testimonials"]{name, "image": image.asset->url, position, company, link, feedback}';
    const brandsQuery =
      '*[_type == "brands"]{name, "imgUrl": imgUrl.asset->url}';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <h2 className="head-text" id="Testimonial">
            Testimonials
          </h2>
          <div className="app__testimonial-item app__flex" >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand: Brands) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={brand.imgUrl} alt={brand.name} />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Testimonial;
