import { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

function ListProject({ name, des, projectlink, techused }) {
  const [showDis, setShowDis] = useState(false);

  return (
    <div
      className="project-list"
      onClick={() => setShowDis(!showDis)}
      onMouseEnter={() => setShowDis(true)}
    >
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>{showDis ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className="description">
        <p>{showDis ? des : `${des.substring(0, 150)}...`}</p>
      </div>

      <div className="row">
        {techused &&
          techused.map((tech, index) => (
            <div className="col-md-4" key={index}>
              <div className="tech-used-in-project">
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="live-demo-button">
        <a target="_" href={projectlink}>
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ListProject;
