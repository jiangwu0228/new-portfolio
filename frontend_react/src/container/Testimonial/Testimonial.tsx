import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import "./Testimonial.scss";

interface Testimonial {
  name: string;
  image: string;
  position: string;
  company: string;
  link: string;
  feedback: string;
}

interface Brands {
  imgUrl: string;
  name: string;
  _id: string;
}

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);

  const handleClick = (e: number) => {
    setCurrentIndex(e);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]{name, "image": image.asset->url},position,company,link,feedback';
    const brandsQuery = '*[_type == "brands"]{name, "imgUrl": image.asset->url}';
    client.fetch(query).then((res) => {
      setTestimonials(res);
    });
    client.fetch(brandsQuery).then((res) => {
      setBrands(res);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
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
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Testimonial;
