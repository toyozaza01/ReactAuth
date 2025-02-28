import React from "react";
import Ptl from "../images/ptl.jpg";
import Pkt from "../images/unnamed.jpg";
import Kmutnb from "../images/LOGO-KMUTNB.png";

const Education = (props) => {
  return (
    <div>
      {props.user ? (
        <div className="grid grid-cols-3 gap-4 gap-min-h-[6rem] min-w-[18rem] bg-neutral rounded-box shadow-2xl text-white p-4 mt-8">
          <div className="card glass w-96">
            <figure>
              <img src={Ptl} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">PTL VC Year 1-3</h2>
              <p>Phatthalung Technical College</p>
            </div>
          </div>

          <div className="card glass w-96">
            <figure>
              <img src={Pkt} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">PKVC Dip. Year 1-2</h2>
              <p>Phuket Vocational College</p>
            </div>
          </div>

          <div className="card glass w-96">
            <figure>
              <img src={Kmutnb} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">KMUTNB B. Now</h2>
              <p>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-4xl m-12 mt-15">You have to login first !</div>
        </div>
      )}
    </div>
  );
};

export default Education;
