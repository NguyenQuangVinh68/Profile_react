import { createContext, useContext, useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Link } from "react-scroll";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Project from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Testimonial from "./components/Testimonial";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavbarMobileview from "./components/Sidebar/NavbarMobileView";

export const ThemeContext = createContext(null);

function App() {
  const [showToTop, setShowToTop] = useState(false);

  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handkeScroll = () => {
      setShowToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handkeScroll);

    return () => {
      window.removeEventListener("scroll", handkeScroll);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className="row w-100 m-0" id="main-header">
        <div
          className="col-sm-2 col-12 p-0 "
          style={
            theme === "light"
              ? { backgroundColor: "#fff" }
              : { backgroundColor: "#222" }
          }
        >
          <NavbarMobileview />
          <Sidebar />
        </div>
        <div className="col-sm-10 p-0 col-12" id={theme}>
          <Home />
          <About />
          <TechStack />
          <Project />
          <WorkExperience />
          <Education />
          <Testimonial />
          <Contact />

          {showToTop && (
            <Link
              className="d-flex justify-content-center align-items-center bg-secondary p-2"
              style={{
                position: "fixed",
                right: 20,
                bottom: 20,
                cursor: "pointer",
              }}
              to="main-header"
            >
              <FiChevronUp size={30} style={{ color: "white" }} />
            </Link>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
