import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
  if (!name || !imageSrc || !birthday) return null
  return (
    <header>
      <img src={imageSrc} style={{height: '400px', width: '400px'}} />
      <h1>{name}</h1>
      <h2>{birthday}</h2>
    </header>
  );
}

export default Header;
