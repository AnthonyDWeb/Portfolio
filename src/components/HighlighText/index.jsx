import React from 'react';
import './index.css';

function HighlighText({ text }) {
    const textToUse = text.split('').join('').replace(/ /g, '\u00a0');
    return (
        <span className="span-container">
            <span className="actual-text">&nbsp;{textToUse}&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;{textToUse}&nbsp;</span>
            
        </span>
    )
}

export default HighlighText;