import React from 'react';
import './toggleStyle.css'

function Toggle({ checked, action }) {
    return (
        <label className="switch">
            <input type="checkbox" defaultChecked={checked} onClick={() => action()} />
            <span className="slider"></span>
        </label>
    )
}

export default Toggle