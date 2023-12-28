import React from "react";
import "./footer.scss";
import { Conatiner } from "../Conatiner";
import Fb from "../../assets/Images/facebook.png";
import Insta from "../../assets/Images/insta.png";
import Twitter from "../../assets/Images/twitter.png";
import Linkedin from "../../assets/Images/linkedin.png";
import Youtube from "../../assets/Images/youtube.png";

export const Footer = () => {
  return (
    <div className="footer">
      <Conatiner pad={"1rem"}>
        <div className="f-main">
          <div className="f-col">
            <p>CONTACT US</p>
            <p className="sub-p">
              Abhis Overseas Educampus ltd, No. 2D, Elcanso Apartments 9/10
              Tamizh Salai, CASA Major Rd Egmore, Chennai, Tamil Nadu-600008
            </p>
          </div>
          <div className="f-col">
            <p>IMPORTANT LINKS</p>
            <div>
              <p className="sub-p">{`> Privacy policy`}</p>{" "}
              <p className="sub-p">{`> Terms & Conditions`}</p>{" "}
              <p className="sub-p">{`> Disclaimer`}</p>{" "}
              <p className="sub-p">{`> Refund Policy`}</p>
            </div>
          </div>
          <div className="f-col">
            <p>CONNECT US</p>
            <div className="social-media">
              <img
                src={Fb}
                alt="fb"
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src={Insta}
                alt="insta"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              <img
                src={Twitter}
                alt="twiter"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              <img
                src={Linkedin}
                alt="linkedin"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              <img
                src={Youtube}
                alt="yt"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </Conatiner>
    </div>
  );
};
