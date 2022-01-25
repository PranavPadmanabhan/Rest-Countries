import React, { useContext, useEffect } from 'react';
import './navbar.css';
import {FaMoon} from 'react-icons/fa'
import {ThemeContext} from '../../constants/ThemeContext'

function Navbar() {
  const { SelectTheme, DarkTheme,preferredTheme} = useContext(ThemeContext)
  useEffect(() => {
    
  }, []);
  
  return (
  <div className='header' style={{backgroundColor:preferredTheme.headerColor}} > 
    <span className="header-title" style={{color:preferredTheme.textColor}}>Where in the world?</span>
    <div onClick={() => SelectTheme(!DarkTheme)} className="mode-button">
        <FaMoon onClick={() => SelectTheme(!DarkTheme)} color={DarkTheme?"white":"black"} size={18}/>
        <span style={{color:preferredTheme.textColor}} onClick={() => SelectTheme(!DarkTheme)} className="button-text">Light mode</span>
    </div>
  </div>
  );
}

export default Navbar;
