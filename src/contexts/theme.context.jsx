import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
    const [theme, setTheme] = useState();
    const dark = "Sombre"; const light = "Clair"; const special = "Spécial";

    if (window.matchMedia('(prefers-color-scheme: dark)').matches && theme !== dark) setTheme(dark)
    if (window.matchMedia('(prefers-color-scheme: light)').matches && theme !== light) setTheme(light)

    window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener('change', event => {
        const newTheme = event.matches ? dark : light;
        if (theme !== newTheme) setTheme(newTheme);
    });

    if (theme === undefined) setTheme(light);

    const themeColor = {
        mainTitle: "",
        title: "",
        text: "",
        link: "",
    };

    switch (theme) {
        case dark:
            themeColor.mainTitle = "white";
            themeColor.title = "white";
            themeColor.text = "white";
            themeColor.link = "white";
            break;
        case light:
            themeColor.mainTitle = "black";
            themeColor.title = "black";
            themeColor.text = "black";
            themeColor.link = "black";
            break;
        case special:
            themeColor.mainTitle = "white";
            themeColor.title = "white";
            themeColor.text = "white";
            themeColor.link = "white";
            break;

        default:
            break;
    }



    // ------------------------------------------------------------
    // PENSEZ A CHECKER POURQUOI "TOO MANY RE RENDER". //
    // ------------------------------------------------------------

    console.log("theme Color", themeColor)

    const ThemeContextValue = { theme, setTheme, dark, light, special, themeColor };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};