import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
    const [theme, setTheme] = useState("Sombre");
    const dark = "Sombre"; const light = "Clair"; const special = "Spécial";
    const themeColor = {};

    switch (theme) {
        case dark:
            themeColor.background = "#343A40";
            themeColor.glasscard = "#495057";
            themeColor.navbar = "#212529";
            themeColor.text = "white";
            themeColor.text = "#E9ECEF";
            break;
        case special:
            themeColor.text = "white";
            themeColor.glasscard = "rgba(255,255,255,0.08)";
            themeColor.navbar = "#212529";
            themeColor.link = "white";
            break;
        default:
            break;
    };

    const ThemeContextValue = { theme, setTheme, dark, light, special, themeColor };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};