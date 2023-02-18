import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import {
  FcHome,
  FcVoicePresentation,
  FcNews,
  FcTodoList,
  FcContacts,
  FcSalesPerformance,
  FcIdea,
  FcBriefcase,
} from "react-icons/fc";
import { Link } from "react-scroll";

import "./NavbarMobileView.css";

function NavbarMobileview() {
  console.log("hi");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed-top">
      <div className="mobile-view-navbar">
        <div className="navbar-header">
          <p onClick={handleOpen}>
            <BiMenu size={25} />
          </p>
        </div>
        {open ? (
          <div className="mobile-nav">
            <ul>
              <li className="nav-item-mobileview">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcHome size={25} />
                  Home
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="about"
                >
                  <FcVoicePresentation size={25} />
                  About
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="techstack"
                >
                  <FcBriefcase size={25} />
                  Tech Stack
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="project"
                >
                  <FcTodoList size={25} />
                  Project
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="workexperience"
                >
                  <FcNews size={25} />
                  Work
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="education"
                >
                  <FcIdea size={25} />
                  Education
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="testimonial"
                >
                  <FcSalesPerformance size={25} />
                  Testimonial
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  to="contact"
                >
                  <FcContacts size={25} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavbarMobileview;
