import { useState, useEffect } from 'react';

export default function useDevice() {
    const [screenSize, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight, orientation: window.screen.orientation.type });
    const width = screenSize.width;
    const height = screenSize.height;
    const isMobile = width < 700;
    const isTablet = width >= 700 && width <= 1024;
    const isDesktop = width > 1024;
    const orientation = screenSize.orientation.includes("portrait") ? "portrait" : "landscape";
    const device = isMobile ? "mobile" : isTablet ? "tablet" : isDesktop && "desktop";
    const deviceContextValue = { screenSize, width, height, isMobile, isTablet, isDesktop, orientation, device };

    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight, orientation: window.screen.orientation.type });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return deviceContextValue;
}