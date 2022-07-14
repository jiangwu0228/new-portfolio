import React, {useEffect, useRef} from "react";
import { init } from "ityped";
import "./Itype.scss"

function Itype() {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if(textRef.current !== null)
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 50,
      strings: [
        "Enterprise website",
        "E-commerce website",
        "Responsive website",
        "Custom development",
        "Secondary development",
      ],
    });
  }, []);
  return (
    <div className="wrapper">
      <h2>Hi There, I'm</h2>
      <h1>Jason Wu</h1>
      <h3>Freelance Web Developer</h3>
      <br />
      <h2>My Services</h2>
      <h3>
        <span ref={textRef}></span>
      </h3>
      <a href="#contact">
        <button>Get in touch now</button>
      </a>
    </div>
  );
}

export default Itype;
