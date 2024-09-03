import { useEffect, useState } from 'react';

const baseDevice = {
    name: "",
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    height: 0,
    width: 0,
    landscape: false
};

export default function useDevice() {
    const [device, setDevice] = useState(baseDevice);

    useEffect(() => {
        reportWindowSize();
    }, [])

    const reportWindowSize = () => {
        const newDevice = structuredClone(baseDevice);
        newDevice.height = window.innerHeight;
        newDevice.width = window.innerWidth;
        const w = newDevice.width;
        w < 768 ? newDevice.isMobile = true : w >= 768 && w < 1024 ? newDevice.isTablet = true : newDevice.isDesktop = true;
        newDevice.name = newDevice.isMobile ? "mobile" : newDevice.isTablet ? "tablet" : "desktop";
        setDevice(newDevice);
    }

    window.onresize = reportWindowSize;
    return { device };
}


