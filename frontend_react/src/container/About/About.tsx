import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const about = [
  { title: "Web Development", description: "I have experienc345e", imgUrl: images.about01 },
  { title: "Web 999", description: "I have experiencewe", imgUrl: images.about02},
  { title: "Web D666", description: "I have experiencerer", imgUrl: images.about03},
  { title: "We444", description: "I have experiencewew", imgUrl: images.about04 },
];
function About() {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span> <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, type: "tween" }}
              className="app__profiles-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <h2 className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default About;
