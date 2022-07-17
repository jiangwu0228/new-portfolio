import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menus: string[] = [
    "Home",
    "About",
    "Works",
    "Skills",
    "Testimonial",
    "Contact",
  ];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.comic} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menus.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-socialMedia">
        <div className="link">
          <a
            href="https://www.linkedin.com/in/jiang-wu-729450222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images.linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/jiangwu0228"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images.github} alt="Github" />
          </a>
        </div>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menus.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
