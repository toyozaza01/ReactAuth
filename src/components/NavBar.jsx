import React from "react";
// import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      {props.user ? (
        <div className="navbar bg-[#525252] rounded-full text-white drop-shadow-2xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl rounded-full">PPs Ch.</a>
            </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost avatar rounded-full"
            >
              <div className="w-10 rounded-full">
                <img src={props.user.photoURL} width={30} alt="user" />
              </div>
              {props.user.displayName}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-danger avatar rounded-full"
            >
              <div className="w-10 rounded-full">
                <a onClick={props.logout}>
                  <span class="material-symbols-outlined p-2">logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar bg-[#525252] rounded-full text-white drop-shadow-2xl">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl rounded-full">PPs Ch.</a>
          </div>
          <div className="dropdown dropdown-end">
            <div className="rounded-full">
              <button
                className="btn btn-accent rounded-full text-white"
                onClick={props.login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
