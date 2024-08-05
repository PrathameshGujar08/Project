import React, { useState } from 'react';

const Sidebar = () => {
  const sidebarStyle = {
    height: "100vh",
    width: "20vw",
    backgroundColor: "black",
    border: "1px solid white",
    position: "fixed",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyle = {
    padding: "0.5rem",
    fontSize: "1.5rem",
    margin: "0.5rem",
    width: "90%",
    boxSizing: "border-box",
    color: "white",
    backgroundColor: "grey",
    border: "none",
    cursor: "pointer",
  };

  const menuStyle = {
    position: "fixed",
    top: "3.5%",
    left: "32vh",
    backgroundColor: "white",
    boxShadow: "0 4px 7px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
};

  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="sideColumn" style={sidebarStyle}>
      <button type="button" style={buttonStyle} onClick={handleMenuClick}>+</button>
      {
        menuOpen && (
          <div className="menu-content" style={menuStyle}>
            <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            </ul>
          </div>
        )}
    </div>
  );
};

export default Sidebar;
