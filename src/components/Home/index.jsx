import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import "./Home.css";
import MyCV from "../../assets/mycv/MyCV.pdf";

function Home({ theme, handleTheme }) {
  return (
    <div className="container text-white" id="home">
      {/* btn change theme */}
      <div className="theme-change" onClick={handleTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>
      {/* content */}
      <div className="home-content">
        <h1 className={theme === "light" ? "text-dark" : "text-white"}>
          Hi I'm a
        </h1>
        <h3 className="my-3 text-warning">
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer",
                "PHP Developer",
                "Design Wordpress",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <div className="button-for-action">
          <div className="hire-me-button">Hire me</div>
          <div className="get-resume-button">
            <a href={MyCV} download="Quang Vinh CV">
              Get Result
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
