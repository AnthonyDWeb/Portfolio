import React, { useContext, useState } from 'react';
import './toggleStyle.css'
import { ThemeContext } from '../../contexts/theme';

function Toggle() {
    const {theme, setTheme} = useContext(ThemeContext);
    const [checked, setCheck] = useState(theme === "dark");

    const handleClick = () => {
        setCheck(!checked);
        setTheme(theme === "dark" ? "light" : "dark")
    };
    return (
        <label className="switch">
            <input type="checkbox" defaultChecked={checked} onClick={handleClick} />
            <span className="slider"></span>
        </label>
    )
}

export default Toggle