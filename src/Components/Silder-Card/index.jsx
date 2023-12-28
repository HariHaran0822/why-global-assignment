import React from "react";
import "./slidercard.scss";

export const CaroselCard = ({ img, title }) => {
  return (
    <div className="carosel-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="carosel-Text">
        <div className="txt">{title}</div>
      </div>
    </div>
  );
};
