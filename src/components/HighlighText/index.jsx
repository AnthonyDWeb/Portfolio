import React, { useContext } from 'react';
import './index.css';
import { DeviseContext } from '../../contexts/devise';

function HighlighText({ text }) {
    const { isDesktop } = useContext(DeviseContext);
    const textToUse = text.split('').join('').replace(/ /g, '\u00a0');
    return (
        <button data-text="Awesome" className="button">
            <span className="actual-text">{!isDesktop && `\u00a0`}&nbsp;{textToUse}&nbsp;</span>
            <span className="hover-text" aria-hidden="true">{!isDesktop && `\u00a0`}&nbsp;{textToUse}&nbsp;</span>
        </button>
    )
}

export default HighlighText;