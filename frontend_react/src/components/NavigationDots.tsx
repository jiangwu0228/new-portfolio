import React from "react";

const NavigationDots = (props: { active: string }) => {
  const menus: string[] = [
    "Home",
    "About",
    "Works",
    "Skills",
    "testimonial",
    "Contact",
  ];
  return (
    <div className="app__navigation">
      {menus.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={props.active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
