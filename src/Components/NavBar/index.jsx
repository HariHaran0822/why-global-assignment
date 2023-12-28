import React from "react";
import Logo from "../../assets/Images/logo.png";
import Dropdown from "react-bootstrap/Dropdown";

import { IoMdSearch } from "react-icons/io";

import "./navBar.scss";
export const NavBar = () => {
  return (
    <div className="nav">
      <div className="company-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <div className="input-container-nav">
          <input
            type="text"
            className="input-with-icon"
            placeholder="Type something..."
          />
          <IoMdSearch className="icon" />
        </div>
      </div>
      <div className="drop-downs">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Explore </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Virtual Learning{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Courses </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Resources{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">About Us </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="login">
        <p>Login</p>|<button className="nav-btn">Demo </button>
      </div>
    </div>
  );
};
