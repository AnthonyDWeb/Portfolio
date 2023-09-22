import React from 'react';
import './index.css';

function BugButton({ children, text, addstyle, addBefore, addAfter }) {
    return (
        <button className="ui-btn">
            {addBefore && addBefore}
            <span style={addstyle && addstyle}>{children ? children : text}</span>
            {addAfter && addAfter}
        </button>
    )
}

export default BugButton;