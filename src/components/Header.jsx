/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="">
      <Link to={"/"}>Home</Link>
      <div>
        <Link to={"/newblog"}>New Blog</Link>
        <button className="logoutBtn">Logout</button>
      </div>
    </nav>
  );
}

export default Header;
