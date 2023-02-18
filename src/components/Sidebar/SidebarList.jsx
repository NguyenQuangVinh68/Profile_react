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

import React from "react";
import "./SidebarList.css";
import imgProfile from "../../assets/image/2.jpg";

function SidebarList({ expandSidebar }) {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          {/* img profile */}
          <div className="sidebar-profile-pic">
            <img src={imgProfile} alt="profile picture" />
          </div>

          {/* list */}

          <ul>
            <li className="nav-item">
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
            <li className="nav-item">
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

            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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

            <li className="nav-item">
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
            <li className="nav-item">
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
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="home"
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="about"
              >
                <FcVoicePresentation size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="techstack"
              >
                <FcBriefcase size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="testimonial"
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="workexperience"
              >
                <FcNews size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="education"
              >
                <FcIdea size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="testimonial"
              >
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
                to="contact"
              >
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

export default SidebarList;
