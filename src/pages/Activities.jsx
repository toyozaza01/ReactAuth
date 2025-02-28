import React from "react";
import Openhouse from "../images/Openhouse.jpg";
const Ativities = (props) => {
  return (
    <div>
      {props.user ? (
        <div className=" min-h-[6rem] min-w-[18rem] bg-neutral rounded-box shadow-2xl text-black p-4 mt-8">
          <div className="card lg:card-side bg-base-100 shadow-xl transition duration-300 ease-in-out">
            <figure>
              <img
                src={Openhouse}
                alt="Album"
                style={{ height: "400px", width: "700px" }}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl">ComEdu Open House</h2>
              <h2 className="card-title text-4xl">KMUTNB</h2>
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

export default Ativities;
