import React from 'react';
import "./slider.css";

export default function Slider({ data }) {

    const Slide = ({ id }) => {
        return (
            <div className="slide">
                {data && data.map(e => {
                    const hasImg = e?.imgFileName;
                    const hasLabel = e?.imgLabel;
                    const imgSrc = require(`../../assets/toolsIcone/${e.imgFileName}`);
                    return (
                        <div key={`${e.imgSrc}${id}`}>
                            {hasImg && <img src={imgSrc} width={50} height={50} alt={`icone ${e.imgLabel}`} />}
                            {hasLabel && <p>{e.imgLabel}</p>}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="slider">
            <Slide id={1} />
            <Slide id={2} />
            <Slide id={3} />
        </div>
    )
}