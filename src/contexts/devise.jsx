import React, { createContext, useEffect, useState } from "react";

export const DeviseContext = createContext({});
export const DeviseProvider = props => {
    const [dimensions, setDimensions] = useState({ width: window.screen.width, height: window.screen.height });
    const width = dimensions.width;
    const height = dimensions.height;
    const isMobile = width < 600;
    const isDesktop = width > 1000;
    const orientation = width < height ? "portrait":"landscape";

    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.screen.width, height: window.screen.height });
        window.addEventListener('resize', (handleResize));
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const DeviseContextValue = { width, height, isMobile, isDesktop, orientation }
    return <DeviseContext.Provider value={DeviseContextValue} {...props} />
};