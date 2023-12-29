import React from "react";
import "./studentCard.scss";

export const StudentCard = ({
  title,
  name,
  country,
  Image,
  logo,
  direction,
}) => {
  return (
    <div className="stud-card" style={{ flexDirection: direction }}>
      <div className="stud-img">
        <img src={Image} alt="img" />
      </div>
      <div className="stud-text">
        <p className="stud-p">{title}</p>
        <p className="stud-name">{name}</p>
        <div className="student-country">
          <p className="stud-count">{country}</p>
          <img
            src={logo}
            alt={name}
            style={{ width: "15px", height: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};
