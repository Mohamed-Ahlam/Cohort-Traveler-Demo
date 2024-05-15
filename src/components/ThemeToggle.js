import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme, theme} = useTheme();
    const buttonText = theme === 'original' ? 'Switch to High Contrast' : "Switch to Original Colors - NOT ACCESSIBLE (For demonstrating purposes)";
    return(
        <button onClick={toggleTheme}
        style={{ position: 'absolute', top: 20, right: 20 }} 
        >
            {buttonText}
        </button>
    );
};

export default ThemeToggle;