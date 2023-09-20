import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
    const [theme, setTheme] = useState();
    const dark = "Sombre"; const light = "Clair"; const special = "Spécial";
    const themeColor = {};

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', event => {
            const newTheme = event.matches ? dark : light;
            if (theme !== newTheme) setTheme(newTheme);
        });
    }, [theme]);

    switch (theme) {
        case dark:
            themeColor.navbar = "#141414";
            themeColor.background = "#141414";
            themeColor.mainTitle = "white";
            themeColor.glasscard = "rgba(255,255,255,0.081)";
            themeColor.title = "white";
            themeColor.text = "white";
            themeColor.link = "white";
            break;
        case light:
            themeColor.navbar = "rgba(0, 0, 0, 0.8)";
            themeColor.navText = "#FDF8F8";
            themeColor.background = "#FDF8F8";
            themeColor.mainTitle = "black";
            themeColor.glasscard = "lightgray";
            themeColor.title = "black";
            themeColor.text = "black";
            themeColor.text2 = "black";
            themeColor.link = "black";
            break;
        case special:
            themeColor.navbar = "rgba(0, 0, 0, 0.4)";
            themeColor.mainTitle = "white";
            themeColor.glasscard = "rgba(255,255,255,0.081)";
            themeColor.title = "white";
            themeColor.text = "white";
            themeColor.link = "white";
            break;
        case undefined:
            if (window.matchMedia('(prefers-color-scheme: dark)').matches && theme !== dark) setTheme(dark);
            if (window.matchMedia('(prefers-color-scheme: light)').matches && theme !== light) setTheme(light);
            if (!window.matchMedia) setTheme(light);
            break;

        default:
            break;
    }

    console.log("theme Color", themeColor)

    const ThemeContextValue = { theme, setTheme, dark, light, special, themeColor };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};