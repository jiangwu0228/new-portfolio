import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import Itype from "../../components/Itype/Itype";
import "./About.scss";

function About() {
  const [aboutData, setAboutData] = useState<any[]>([]);

  useEffect(() => {
    const query =
      '*[_type == "abouts"]{title, description, "imgUrl": imgUrl.asset->url}';
    client.fetch(query).then((res) => {
      setAboutData(res);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" id="About">
        I Know That <span>Good Design</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {aboutData.map((about, index) => {
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
