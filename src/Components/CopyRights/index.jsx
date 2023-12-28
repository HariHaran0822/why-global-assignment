import React from "react";
import { Conatiner } from "../Conatiner";
import "./copy.scss";

export const CopyRights = () => {
  return (
    <Conatiner pad="0.5">
      <div className="copy-container">
        <div className="copy-left">
          <p style={{ margin: "0" }}>
            Copyright © 2022{" "}
            <span>
              {" "}
              <a href="https://abhisoverseas.com/" className="link">
                Abhis Overseas Educampus Private Limited .
              </a>
            </span>{" "}
            All Rights Reserved.{" "}
          </p>
        </div>{" "}
        <div className="copy-right">
          <p style={{ margin: "0" }}>
            Designed & Developed by{" "}
            <span>
              <a href="https://whyglobalservices.com/" className="link">
                WHY Global Services.
              </a>
            </span>
          </p>
        </div>
      </div>
    </Conatiner>
  );
};
