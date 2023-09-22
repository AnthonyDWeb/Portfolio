import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
    const [theme, setTheme] = useState("Sombre");
    const dark = "Sombre"; const light = "Clair"; const special = "Spécial";
    const themeColor = {};

    // useEffect(() => {
    //     window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', event => {
    //         const newTheme = event.matches ? dark : light;
    //         if (theme !== newTheme) setTheme(newTheme);
    //     });
    // }, [theme]);

    switch (theme) {
        case dark:
            themeColor.background = "#141414";
            themeColor.glasscard = "#141414";
            themeColor.navbar = "#141414";
            themeColor.text = "white";
            break;
        case special:
            themeColor.text = "white";
            themeColor.glasscard = "rgba(255,255,255,0.08)";
            themeColor.navbar = "rgba(255,255,255,0.8)";
            themeColor.link = "white";
            break;
        default:
            break;
    };

    const ThemeContextValue = { theme, setTheme, dark, light, special, themeColor };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};