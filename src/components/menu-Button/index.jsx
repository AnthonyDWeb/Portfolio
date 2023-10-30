import React from 'react';
import './index.css';

function ButtonMenu({display, action}) {
    return (
            <button className={`menu__icon ${display}`} onClick={()=> action()}>
                <span></span>
                <span></span>
                <span></span>
            </button>
    )
}

export default ButtonMenu;