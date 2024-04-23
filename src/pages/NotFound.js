/** @format */
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not_found">
      <h1>Seems your are lost..</h1>
      <Link to={"/"}>Go Back Home</Link>
    </div>
  );
}

export default NotFound;
