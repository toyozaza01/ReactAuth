import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h2>Page Not Found</h2>
      <div>There is no such a page.</div>
      <hr />
      <Link to="/">Back Home</Link>
    </>
  );
};

export default PageNotFound;