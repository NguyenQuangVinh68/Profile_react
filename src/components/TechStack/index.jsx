import "./TechStack.css";
import data from "./data";
import { useState } from "react";

function TechStack() {
  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const handleLoadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <>
      <div className="container techstack-section " id="techstack">
        <div className="section-title">
          <h5>Tech Stack</h5>
          <span className="line" />
        </div>

        <div className="row">
          {data.slice(0, showMoreTechStack).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="tech-content">
                  <span
                    className="tech-number"
                    style={{ backgroundColor: item.color }}
                  >
                    {index + 1}
                  </span>
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        {showMoreTechStack < data.length && (
          <span onClick={handleLoadMore} className="load-more-tech-stack">
            Load more
          </span>
        )}
      </div>
    </>
  );
}

export default TechStack;
