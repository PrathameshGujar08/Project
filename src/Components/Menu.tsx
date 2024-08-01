import React from "react";
import MenuItems from "../utils/MenuItems.json";
import { MenuItemInterface } from "@/interfaces/MenuItemInterface";

const Menu = (props) => {
    const menuStyle = {
        position: "fixed",
        top: "3.5%",
        right: "3%",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000, // Ensure the menu is on top
    };

    const buttonStyle = {
        backgroundColor: "white",
        border: "1px solid #cccccc",
        borderRadius: "4px",
        padding: "8px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    const closeButtonStyle = {
        border: "none",
        borderRadius: "50%",
        color: "black",
        cursor: "pointer",
        fontSize: "12px",
        height: "20px",
        lineHeight: "20px",
        padding: 0,
        position: "absolute",
        right: "8px",
        top: "8px",
        width: "20px",
        textAlign: "center",
    };

    const handleMenuClick = () => {
        props.toggleMenu();
    };

    const handleMenuItemClick = (item: MenuItemInterface) => {
        props.insertShape(item);
    };

    return (
        <div className="menu" style={menuStyle}>
            <button type="button" style={buttonStyle} onClick={handleMenuClick}>
                Menu
            </button>
            {props.menuOpen && (
                <div className="menu-content" style={menuStyle}>
                    <button type="button" style={closeButtonStyle} onClick={handleMenuClick}>
                        &times;
                    </button>
                    <ul>
                        {MenuItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleMenuItemClick(item)}
                                style={{ cursor: "pointer" }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

Menu.propTypes = {};

export default Menu;
