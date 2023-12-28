import React from "react";
import { Conatiner } from "../Conatiner";
import "./teachers.scss";

import { teachersData } from "../../Data/TeachersData";
import { TeachersCard } from "../TeachersCard";
export const Teachers = () => {
  return (
    <Conatiner>
      <div className="teacher-container">
        <div className="teacher-title">
          <p className="teacher-t1">What Teachers say about VR Classes </p>
          <p className="teacher-t2">
            Over 40,000+ classrooms worldwide utilize VR Classes to deliver
            immense learning with virtual reality. Hear some of their success
            stories below !{" "}
          </p>
        </div>
        <div className="cards-teacher">
          {teachersData.map((item) => (
            <TeachersCard items={item} key={item.name} />
          ))}
        </div>
      </div>
    </Conatiner>
  );
};
