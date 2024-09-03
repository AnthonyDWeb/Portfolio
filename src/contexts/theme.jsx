import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("dark");
    const [currentPage, setPage] = useState();

    const ThemeContextValue = { theme, setTheme, currentPage, setPage };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};