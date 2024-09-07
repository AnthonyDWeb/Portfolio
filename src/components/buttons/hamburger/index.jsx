import React, { useContext, useEffect } from 'react';
import "./index.css";
import { ThemeContext } from '../../../contexts/theme';

export default function Hamburger() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => { handleTheme() }, [theme]);

    const handleTheme = () => [".navbar", ".hamburger"].forEach(c => document.querySelector(c).classList.remove("open"));
    const handle = () => [".navbar", ".hamburger"].forEach(c => {
        const el = document.querySelector(c).classList;
        const isDisplay = el.contains("open");
        isDisplay ? el.remove("open") : el.add("open");
    });
    
    return (
        <svg className="hamburger" viewBox="0 0 32 32" height="30px" width="30px" onClick={handle}>
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
        </svg>
    )
}