import React, { useContext } from 'react';
import { DeviseContext } from '../../contexts/devise';

function DownloadIcone() {
    const { device } = useContext(DeviseContext);

    const size = device === "desktop" ? "3vw" : "4vw";
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={size} width={size}><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path></g> </g></svg>
}

export default DownloadIcone;