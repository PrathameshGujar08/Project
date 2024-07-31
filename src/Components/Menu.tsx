import React, { useState } from 'react'
const Menu = () => {

    const menuStyle = {
        position: "fixed",
        top: "3.5%",
        right: "3%",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }
    const buttonStyle = {
        backgroundColor: "white",
        border: "1px solid #cccccc",
        borderRadius: "4px",
        padding: "8px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="menu" style={menuStyle}>
                <button type="button"
                    style={buttonStyle}
                    onClick={handleMenuClick}
                >Menu</button>
                {menuOpen && (
                    <div className="menu" style={menuStyle}>
                        {/* Your menu content here */}
                        <ul>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Menu