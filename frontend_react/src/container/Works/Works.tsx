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
  const [worksData, setWorksData] = useState<string[]>([]);
  const [filterWork, setFilterWork] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleWorkFilter = (category: string) => {
    setActiveCategory(category);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__work-filter">
        {workCategory.map((category, index) => {
          return (
            <div
              key={index}
              onClick={() => {}}
              className={`app__work-filter-item app__flex p-text ${
                activeCategory === category ? "active" : ""
              }`}
            >{category}</div>
          );
        })}
      </div>
    </>
  );
}

export default Works;
