import React from 'react';
import './toggleStyle.css'

function Toggle({ theme, action }) {
    return (
        <label className="switch">
            <input type="checkbox" defaultChecked={theme === "Spécial"} onClick={() => action()} />
            <span className="slider"></span>
        </label>
    )
}

export default Toggle