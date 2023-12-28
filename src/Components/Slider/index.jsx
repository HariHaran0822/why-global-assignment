import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { CaroselData } from "../../Data/CarouselData";
import { CaroselCard } from "../Silder-Card";
import Vr1 from "../../assets/Images/vr-1.png";
import Vr2 from "../../assets/Images/vr-2.png";
import Vr3 from "../../assets/Images/vr-3.png";
import "./slider.scss";
const CardCarousel = () => {
  return (
    <>
      <div className="carousel-container">
        <Carousel style={{ height: "30rem" }}>
          <Carousel.Item>
            <div className="carosel">
              {CaroselData.map((item) => (
                <CaroselCard
                  img={item.image}
                  title={item.text}
                  key={item.text}
                />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carosel">
              {CaroselData.map((item) => (
                <CaroselCard
                  img={item.image}
                  title={item.text}
                  key={item.text}
                />
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carousel-container-mobile">
        <div className="mobile-slider">
          <Carousel style={{ height: "30rem" }}>
            <Carousel.Item>
              <div className="carosel">
                <CaroselCard img={Vr1} title="Experiment" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carosel">
                <CaroselCard img={Vr2} title="Experiment" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carosel">
                <CaroselCard img={Vr3} title="Experiment" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
