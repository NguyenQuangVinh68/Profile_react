import ListProject from "./ListProject";
import "./Project.css";
import projects from "./projects.js";

function Project() {
  return (
    <div className="container mb-5" id="project">
      <div className="section-title">
        <h5>Project</h5>
        <span className="line"></span>
      </div>

      <div className="row mt-5">
        {projects.map((item, index) => (
          <div className="col-md-6 mt-3" key={index}>
            <ListProject {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
