/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import RightBar from "../components/RightBar/RightBar.js";

  const courses = [
    {
      courseName: "ghraphics",
      id: 868
    },
    {
      courseName: "JavaScript Fundamentals",
      id: 869
    },
    {
      courseName: "Introduction to Data Science",
      id: 870
    },
    {
      courseName: "Web Development Basics",
      id: 871
    },
    {
      courseName: "Graphic Design Principles",
      id: 872
    },
    {
      courseName: "Python Programming",
      id: 873
    },
    {
      courseName: "Machine Learning Essentials",
      id: 874
    },
    {
      courseName: "Mobile App Development",
      id: 875
    },
    {
      courseName: "UI/UX Design Fundamentals",
      id: 876
    },
    {
      courseName: "Database Management",
      id: 877
    }
  ];

var ps;

function Home(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        courses={courses}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
      {/* <RightBar/> */}
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            );
          })}
        </Routes>
        <Footer fluid />
      </div>
      <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      />
    </div>
  );
}

export default Home;
