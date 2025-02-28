import React from "react";
import "../css/carousels.css";
import { Link } from "react-router-dom";

export const carousels = () => {
  return (
    <div>
      <div class="container">
        <div>
          <Link to="/infomation">
            <div class="content">
              <h2>My Info</h2>
              <span>Prapatsorn Ch.</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/activities">
            <div class="content">
              <h2>My Activities</h2>
              <span>Prapatsorn Ch.</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/education">
            <div class="content">
              <h2>My Education Background</h2>
              <span>Prapatsorn Ch.</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <div class="content">
              <h2>Contact us</h2>
              <span>Prapatsorn Ch.</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default carousels;