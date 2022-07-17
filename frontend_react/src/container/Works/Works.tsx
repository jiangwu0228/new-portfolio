import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { client } from "../../client";
import "./Works.scss";

const workCategory: string[] = [
  "All",
  "Works",
  "Projects",
  "Articles",
  "Demos",
];

function Works() {
  const [works, setWorks] = useState<any[]>([]);
  // const [workCategory, setWorkCategory] = useState<string[]>([]);
  const [filterWork, setFilterWork] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [animateCard, setAnimateCard] = useState<object>({ y: 0, opacity: 1 });

  useEffect(() => {
    const query =
      '*[_type == "works"]{id, title, shortDesc, situation, task, actions, result, "imgUrl": imgUrl.asset->url, "icon": icon.asset->url, codeLink, tag, techs}';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // useEffect(() => {
  //   const query = '*[_type == "workCategory"]';
  //   client.fetch(query).then((data) => {
  //     setWorkCategory(data);
  //   });
  // }, []);

  const handleWorkFilter = (category: string) => {
    setActiveCategory(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (category === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag.includes(category)));
      }
    }, 500);
  };
  
  return (
    <>
      <div className="app_works" id="Works">
        <h2 className="head-text">
          My Creative <span>Portfolio</span> <br /> means{" "}
          <span>Good Business</span>
        </h2>
        <div className="app__works-filter">
          {workCategory.map((category, index) => {
            return (
              <div
                key={index}
                onClick={() => handleWorkFilter(category)}
                className={`app__works-filter-item app__flex p-text ${
                  activeCategory === category ? "active" : ""
                }`}
              >
                {category}
              </div>
            );
          })}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => {
            return (
              <div className="app__work-item app__flex" key={index}>
                <div className="app__work-img app__flex">
                  <img src={work.imgUrl} alt={work.title} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                          staggerChildren: 0.5,
                        }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {work.shortDesc}
                  </p>

                  <div className="app__work-tag app__flex">
                    {/* {work.techs.map((tech: string, index: number) => {
                      return (
                        <p className="p-text" key={index}>
                          {tech}
                        </p>
                      );
                    })} */}
                    <p className="p-text">
                      {work.techs[0]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default Works;
