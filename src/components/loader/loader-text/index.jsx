import React from 'react';
import "./index.css"

export default function TextLoad({ label, text }) {
    return (
        <h1 className={`text-load ${label}`}>{text}</h1>
    )
}
