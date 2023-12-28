import React from "react";
import { Conatiner } from "../Conatiner";
import "./virtual.scss";
import Vimage from "../../assets/Images/v-image.png";

export const VirutalTour = () => {
  return (
    <Conatiner pad={"5rem 2rem"}>
      <div className="virtual-container">
        <div className="text-block">
          <h1 className="v-h">Virtual</h1>
          <div className="text-conatiner">
            <div className="text-left">
              <h2>Tour</h2>
            </div>
            <div className="text-right">
              <p className="paragarph">
                Despite being a technology that originated decades ago, many
                people are still unfamiliar with the concept of Virtual Reality.
                It is also quite common to confuse the term Virtual Reality with
                <span className="link">
                  {" "}
                  <a href="https://www.iberdrola.com/innovation/what-is-augmented-reality">
                    augmented reality.
                  </a>
                </span>
              </p>

              <p className="paragarph">
                The main difference between the two is that VR builds the world
                in which we immerse ourselves through a specific headset. It is
                fully immersive and everything we see is part of an environment
                artificially constructed through images, sounds, etc. On the
                other hand, in augmented reality (AR), our own world becomes the
                framework within which objects, images or similar are placed.
                Everything we see is in a real environment and it may not be
                strictly necessary to wear a headset. The clearest and most
                mainstream example of this concept is Pokémon Go.
              </p>
              <p className="paragarph">
                However, there is also a combination of both realities called
                mixed reality. This hybrid technology makes it possible, for
                example, to see virtual objects in the real world and build an
                experience in which the physical and the digital are practically
                indistinguishable.
              </p>
            </div>
          </div>
        </div>
        <div className="image-block">
          <div className="input-container">
            <input className="inputs" type="text" placeholder="Type" />
            <button>Book Free Consultation</button>
          </div>
          <div className="v-img-conatiner">
            <img src={Vimage} alt="v-img" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </Conatiner>
  );
};
