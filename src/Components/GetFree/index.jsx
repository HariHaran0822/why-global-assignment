import React from "react";
import { Conatiner } from "../Conatiner";
import "./getFree.scss";
export const GetFree = () => {
  return (
    <Conatiner>
      <div className="get-free-container">
        <h1 className="gfc-h1">
          Get your free guide on Virtual Reality today !
        </h1>
        <button className="gfc-btn">Download</button>{" "}
      </div>
    </Conatiner>
  );
};
