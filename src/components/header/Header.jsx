import React from 'react';
import "./header.css";
import IMG1 from "../../Assets/IMG1.png";

const Header = () => {
  return (
    <header>
        <div className=" container header__container">
            <a href="https://artish.world" target="_blank" rel='noreferrer'>
        <img src={IMG1} alt="artish" />
        </a>
        </div>
    </header>
  )
}

export default Header