import React, { useContext } from 'react';
import "./slider.css";
import { ThemeContext } from '../../contexts/theme.context';

export default function Slider({ data }) {
    const { themeColor } = useContext(ThemeContext);


    const Slide = ({ id }) => {
        return (
            <div className="slide">
                {data && data.map(e => {
                    const hasImg = e?.imgFileName;
                    const hasLabel = e?.imgLabel;
                    const imgSrc = require(`../../assets/toolsIcone/${e.imgFileName}`);
                    return (
                        <div key={`${e.imgFileName}${id}`}>
                            {hasImg && <img src={imgSrc} width={50} height={50} alt={`icone ${e.imgLabel}`} />}
                            {hasLabel && <p style={{color: themeColor.text}}>{e.imgLabel}</p>}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="sliderTools">
            <Slide id={1} />
            <Slide id={2} />
            <Slide id={3} />
        </div>
    )
};