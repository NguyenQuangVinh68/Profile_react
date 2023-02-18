import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcCamera } from "react-icons/fc";

import "./WorkExperience.css";
import data from "./dataWorkExperience";

function WorkExperience() {
  return (
    <div className="container my-5" id="workexperience">
      <div className="section-title">
        <h5>WorkExperience</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor="red">
        {data.map((item, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={item.year}
              dateClassName="date-class"
              contentArrowStyle={{ borderRight: "7px solid #6F1AB6" }}
              contentStyle={{ backgroundColor: "#3D1766", color: "#fff" }}
              iconStyle={{ backgroundColor: "#CD0404", color: "#fff" }}
              icon={<FcCamera />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techSkill.map((skill, indexSkill) => {
                  return (
                    <div className="col-sm-4" key={indexSkill}>
                      <div className="tech-skills">
                        <p>{skill.techname}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default WorkExperience;
