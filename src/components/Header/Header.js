import React from "react";
import "./Header.css";

function Header({ onSearch }) {
  return (
    <div onClick={() => onSearch("")} className="header-container">
      React Post List
    </div>
  );
}

export default Header;
