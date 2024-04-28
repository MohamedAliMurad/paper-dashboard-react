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
import { Link, NavLink, useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Nav, Row } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import  logo from "../../assets/img/O6U-Logo.jpg";


var ps;

function Sidebar(props) {

  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo" >
        <Link
          to="/admin/home"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="O6U-logo" />
          </div>
        </Link>
        <Link
          to="/admin/home"
          className="simple-text logo-normal"
        >
          O6U
        </Link>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <div className="text-center">
          <div className="courses"><i className="nc-icon nc-single-copy-04"/> Courses</div>
          {
            props.courses.map((course, key) => {
              // console.log(course);
              return (
                <div className="course-name" key={course.id} course={course}>
                <Link to={`/admin/course/${course.id}`}>
                  {course.courseName}
                </Link>
                </div>
              );
            })
          }
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
