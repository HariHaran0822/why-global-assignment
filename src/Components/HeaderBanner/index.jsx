import React from "react";
import Fb from "../../assets/Images/facebook.png";
import Insta from "../../assets/Images/insta.png";
import Twitter from "../../assets/Images/twitter.png";
import Linkedin from "../../assets/Images/linkedin.png";
import Youtube from "../../assets/Images/youtube.png";
import Arrow from "../../assets/Images/arrow.svg";
import { Container } from "react-bootstrap";
import "./headerbanner.scss";
export const HeaderBanner = () => {
  return (
    <div className="header-section">
      <Container pad="2rem">
        <div className="header-container">
          <div className="contact">
            {`Contact us`}
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="social-media">
            <img src={Fb} alt="fb" />
            <img src={Insta} alt="insta" /> <img src={Twitter} alt="twiter" />{" "}
            <img src={Linkedin} alt="linkedin" /> <img src={Youtube} alt="yt" />
          </div>
        </div>
      </Container>
    </div>
  );
};
