import React, { useState } from 'react'
import Colors from '../constants/Colors';
export const ThemeContext = React.createContext();



function ThemeContextProvider(props) {

    const [DarkTheme , setDarkTheme] = useState(true);
    function SelectTheme(theme){
        setDarkTheme(theme);
    }
    const preferredTheme = DarkTheme == true?Colors.DarkMode:Colors.LightMode;
    const value = {
        SelectTheme, DarkTheme,preferredTheme
    }

  return (
      <ThemeContext.Provider value={value}>
          {props.children}
      </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
