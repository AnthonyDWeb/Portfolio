import React from 'react';
import './toggleStyle.css'

function Toggle({ mobile, theme, action }) {
    return (
        <label className="switch" style={{marginTop: mobile && 10}}>
            <input type="checkbox" defaultChecked={theme === "Spécial"} onClick={() => action()} />
            <span className="slider"></span>
        </label>
    )
}

export default Toggle