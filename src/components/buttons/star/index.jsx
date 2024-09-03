import React, { useState } from 'react';
import "./index.css"

export default function Star() {
  const [active, setActivation] = useState(false);

  const handle = () => {
    alert(active ? "spécial mode retiré" :"special mode activé");
    active ? document.querySelector(".star").classList.remove("special") : document.querySelector(".star").classList.add("special");
    setActivation(!active);
  }
  return (
    <svg className={`star`} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000" onClick={handle}>
      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
    </svg>
  )
}