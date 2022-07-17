import React, {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { init } from "ityped";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const techImg = [images.laravel, images.react, images.vue];

function Header(): JSX.Element {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if(textRef.current !== null)
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 50,
      strings: [
        "Freelance Developer",
        "Backend Developer",
        "Frontend Developer",
      ],
    });
  }, []);
  return (
    <div className="app__header app__flex" id="Home">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.85, ease: "easeInOut" }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Jason</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <span ref={textRef}></span>
          </div>
          <div className="tag-cmp app__flex">
            <a href="#Contact">
              <button>Get in touch now</button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5, ease: "easeInOut" }}
      >
        <img
          src={images.profile}
          alt="profile_bg"
          style={{ height: 710, width: 425 }}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {techImg.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Header;
