import React from "react";
import { Conatiner } from "../Conatiner";
import "./enquiry.scss";
export const Enquiry = () => {
  return (
    <div className="enq-section">
      <Conatiner>
        <div className="enq-container">
          <div className="enq-title">Feel free to enquire us</div>
          <div className="forms">
            <form>
              <div className="form-container">
                <input type="text" id="inputs" placeholder="Name" />
                <input type="text" id="inputs" placeholder="Mail" />
                <input type="text" id="inputs" placeholder="Mobile number" />
                <input type="text" id="inputs" placeholder="Assessment for" />
                <input type="text" id="inputs-message" placeholder="Message" />
                <div className="btn-container">
                  <button className="form-Btn">Enquire</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Conatiner>
    </div>
  );
};
