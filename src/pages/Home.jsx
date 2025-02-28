import React from "react";
import "../css/carousels.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      {props.user ? (
        <div>
          <div class="container m-4 mt-8">
            <div>
                <Link to='/information'>
                <div class="content">
                  <h2>My Info</h2>
                  <span>Prapatsorn Ch.</span>
                </div>
                </Link>
            </div>
            <div>
                <Link to='/activities'>
                <div class="content">
                  <h2>My Activities</h2>
                  <span>Prapatsorn Ch.</span>
                </div>
                </Link>
            </div>
            <div>
                <Link to='/education'>
                <div class="content">
                  <h2>My Education Background</h2>
                  <span>Prapatsorn Ch.</span>
                </div>
                </Link>
            </div>
            <div>
                <Link to='/contact'>
                <div class="content">
                  <h2>Contact us</h2>
                  <span>Prapatsorn Ch.</span>
                </div>
                </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
            <div className="text-4xl m-12 mt-15">
                You have to login first !
            </div>
        </div>
      )}
    </div>
  );
};

export default Home;
