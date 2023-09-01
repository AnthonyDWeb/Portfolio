import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
    const [theme, setTheme] = useState("Spécial");

    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     // dark mode
    // }
    // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    //     const newColorScheme = event.matches ? "dark" : "light";
    // });

    const ThemeContextValue = { theme, setTheme };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};