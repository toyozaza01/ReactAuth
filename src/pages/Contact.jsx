import React from "react";

const Contact = (props) => {
  return (
    <div>
      {props.user ? (
        <div className="grid grid-cols-3 min-h-[6rem] min-w-[18rem] bg-neutral rounded-box shadow-2xl text-white p-4 mt-8">
          <div className="card glass w-96">
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Facebook</h2>
              <p>Prapatsorn Chaiprom</p>
              <a
                href="https://www.facebook.com/prapussorn.chaiprom.1/"
                target="_blank"
                className="btn btn-primary"
              >
                Add Friend
              </a>
            </div>
          </div>

          <div className="card glass w-96">
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/768px-Instagram_logo_2022.svg.png"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Instragram</h2>
              <p>toyo.pps</p>
              <a
                href="https://www.instagram.com/toyo.pps/"
                target="_blank"
                className="btn btn-primary"
              >
                Follow me
              </a>
            </div>
          </div>

          <div className="card glass w-96">
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">YouTube</h2>
              <p>Lemplee</p>
              <a
                href="https://www.youtube.com/@prapassornchiaprom1501"
                target="_blank"
                className="btn btn-primary"
              >
                Subscribe
              </a>
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

export default Contact;
