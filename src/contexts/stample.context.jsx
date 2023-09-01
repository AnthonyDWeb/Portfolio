import React, { createContext } from "react";

export const XContext = createContext({});
export const XProvider = props => {
    const XContextValue = { };
    return <XContext.Provider value={XContextValue} {...props} />
};