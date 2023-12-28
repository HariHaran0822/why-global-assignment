import React from "react";
import { NavBar } from "../NavBar";
import "./herosection.scss";
import Banner from "../../assets/Images/banner.png";
import BannerText from "../../assets/Images/bannerText.png";
import { Conatiner } from "../Conatiner";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <Conatiner pad="0rem">
        <NavBar />
        <div className="banner">
          <div className="img-container">
            <img src={Banner} alt="bannerimage" />
          </div>
          <div className="content">
            <img src={BannerText} alt="bannerText" />
          </div>
        </div>
      </Conatiner>
    </div>
  );
};
