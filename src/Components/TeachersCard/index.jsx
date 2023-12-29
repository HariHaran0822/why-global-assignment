import React from "react";
import "./teacher.scss";

export const TeachersCard = ({
  items: { name, country, countryIcon, para1, para2, teacherIcon },
}) => {
  return (
    <div className="card">
      <div className="card-headers" key={name}>
        <div className="card-text">
          <p className="name">{name}</p>
          <div className="card-country">
            <p className="country">{country}</p>
            <img src={countryIcon} alt={name} />
          </div>
        </div>
        <div className="teacher-image">
          <img src={teacherIcon} alt={name} />
        </div>
      </div>
      <div className="card-context">
        <p className="paragaraph-teacher"> {para1}</p>
        <p className="paragaraph-teacher"> {para2}</p>
      </div>
    </div>
  );
};
