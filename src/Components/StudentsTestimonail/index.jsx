import React from "react";
import "./students.scss";
import { Conatiner } from "../Conatiner";
import { StudentCard } from "../StudentsCard";
import USAlogo from "../../assets/Images/usa.png";
import Uklogo from "../../assets/Images/uk.png";

import LeftImage from "../../assets/Images/left.png";
import RighttImage from "../../assets/Images/right.png";

export const StudentTestimonial = () => {
  return (
    <Conatiner>
      <div className="studenets-conatiner">
        <p className="student-title">Students Testimonies</p>
        <div className="student-testimonial">
          <StudentCard
            title="It’s totally wow..need such advance learning all over the world.
          Planning to co-ordinate with teachers to perform higher education to
          students."
            name="Mark"
            country="USA"
            logo={USAlogo}
            Image={LeftImage}
            direction="row"
          />
          <StudentCard
            title="It’s totally wow..need such
advance learning all over the world.
Planning to co-ordinate with teachers
to perform higher education to students."
            name="Stella"
            country="UK"
            logo={Uklogo}
            Image={RighttImage}
            direction="row-reverse"
            align="end"
          />
        </div>
      </div>
    </Conatiner>
  );
};
