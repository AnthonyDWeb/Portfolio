// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
// CONTEXT //
import { ThemeContext } from '../contexts/theme';
// PAGE //
// COMPONENT //
import ContactMe from '../components/form/contact-me';
// OTHER //

export default function Contact({ device }) {
  const { theme } = useContext(ThemeContext);
  
  const GitMedia = () => {
    const iconPath = theme === "dark" ? require(`../assets/images/github-mark-white.png`) : require(`../assets/images/github-mark.png`);
    return (
      <a className='media-container' href={"https://github.com/AnthonyDWeb"} target="_blank" rel="noreferrer">
        <img className='media-icon' src={iconPath} alt='github' />
        <p className='media-label'>Github</p>
      </a>
    )
  };

  return (
    <div id='contact' className={`page ${device.name}`}>
      <ContactMe />
      <GitMedia />
    </div>
  )
}
