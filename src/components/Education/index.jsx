import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "Tu Dortmund University,Germany",
      degree: "Masters in Data Science",
      year: "01/09/2020 – CURRENT",
      des: "Currently, I am doing my Master's in Data Science at TU Dortmund University, Germany",
    },
    {
      name: "Daffodil International University,Bangladesh",
      degree: "B.sc in Software Engineering",
      year: "04/01/2015 – 18/12/2018",
      des: "I did my bachelor's degree in Software Engineering",
    },
  ];

  const colors = ["#001CCE", "#4B088A", "#FE2EF7", "#FF1042"];

  return (
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "yellow" }}
              >
                {item.degree}
              </h5>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
