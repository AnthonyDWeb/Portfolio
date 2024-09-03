import React, { useContext } from 'react';
import './glasscard.css'
import { ThemeContext } from '../../../contexts/theme';

export default function Glasscard({children, hoverIt, addClass, addstyle}) {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`glasscard ${theme} ${hoverIt && "hovercard"} ${addClass}`} style={addstyle}>{children}</div>  )
}
