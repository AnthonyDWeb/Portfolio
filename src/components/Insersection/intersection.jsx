import React from 'react';
import "./intersection.css";

export default function Intersection({ children, idObserver, refObserver, addClass, addStyle }) {
    const classname = `observer ${addClass}`;
    return (
        <div id={idObserver} ref={refObserver} className={classname} style={addStyle}>{children}</div>
    )
}
