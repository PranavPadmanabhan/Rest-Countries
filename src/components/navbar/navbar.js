import React, { useContext, useEffect } from 'react';
import './navbar.css';
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../../constants/ThemeContext'

function Navbar() {
  const { SelectTheme, DarkTheme, preferredTheme } = useContext(ThemeContext)
  useEffect(() => {

  }, []);

  return (
    <div className='header' style={{ backgroundColor: preferredTheme.headerColor }} >
      <span className="header-title" style={{ color: preferredTheme.textColor }}>Where in the world?</span>
      <div onClick={() => SelectTheme(!DarkTheme)} className="mode-button">
        {
          DarkTheme ? (<FaSun style={{ marginRight: 5 }} onClick={() => SelectTheme(!DarkTheme)} color={"white"} size={18} />
          ) : (<FaMoon style={{ marginRight: 5 }} onClick={() => SelectTheme(!DarkTheme)} color={"black"} size={18} />
          )
        }
        <span style={{ color: preferredTheme.textColor }} onClick={() => SelectTheme(!DarkTheme)} className="button-text">{DarkTheme ? "Light mode" : "Dark mode"}</span>
      </div>
    </div>
  );
}

export default Navbar;
