import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
    const [theme, setTheme] = useState({
        default: true,
        text: "#E9ECEF",
        navbar: "#212529",
        background: "",
        glasscard: ""
    });

    switch (theme.default) {
        case true:
            theme.background = "#343A40";
            theme.glasscard = "#495057";
            break;
        case false:
            theme.background = "transparent";
            theme.glasscard = "rgba(255,255,255,0.08)";
            theme.border = "#37FF8B";
            break;
        default:
            break;
    };

    const ThemeContextValue = { theme, setTheme };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};