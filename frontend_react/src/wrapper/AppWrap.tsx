import React from "react";
import { NavigationDots, SocialMedia } from "../components";

type Props = {
  children: React.ReactNode;
  idName: string;
  classNames: string;
};
// export type AppProps {
//   functionChildren: (idName: string,classNames: string) => React.ReactNode;
// }
// const AppWrap: React.FC<Component> = ({ children, idName, classNames }) =>
const AppWrap: React.FC<Props> = props => {
  const { children, idName, classNames } = props;
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        {children}
        <div className="copyright">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
