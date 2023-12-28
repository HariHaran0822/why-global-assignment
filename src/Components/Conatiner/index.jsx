import React from "react";
import "./container.scss";
export const Conatiner = ({ children, pad }) => {
  return (
    <div className="container" style={{ padding: pad ?? "2rem" }}>
      {children}
    </div>
  );
};
