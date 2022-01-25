import { useContext, useEffect, useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import './App.css';
import Country from './components/navbar/Country/Country';
import Navbar from './components/navbar/navbar';
import ThemeContextProvider from './constants/ThemeContext';
import { ThemeContext } from './constants/ThemeContext'

function App() {

  const [dropdown, setDropdown] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [regions, setregions] = useState(["Africa","America","Asia","Europe","Oceania"]);

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer >
        {
          ({ SelectTheme, DarkTheme, preferredTheme }) => (
            <div className="App" style={{ backgroundColor: preferredTheme.backgroundColor }}>
              <Navbar />
              <div className="short-navbar" style={{ backgroundColor: preferredTheme.backgroundColor }}>
                <div className="search" style={{backgroundColor:preferredTheme.elementColor}}>
                  <FaSearch color={DarkTheme?"grey":"black"}/>
                  <input placeholder='Search' type="text" className="Input" style={{backgroundColor:preferredTheme.elementColor}}/>
                </div>
                <div className="dropdown" style={{backgroundColor:preferredTheme.elementColor}}>
                  <div onClick={() => setDropdown(!dropdown)} className="dropdown-title-box" style={{backgroundColor:preferredTheme.elementColor}}>
                    <span onClick={() => setDropdown(!dropdown)} className="dropdown-title" style={{color:preferredTheme.textColor}}>{selectedRegion}</span>
                    <FaChevronDown onClick={() => setDropdown(!dropdown)} color={DarkTheme?"white":"black"}/>
                  </div>
                  {dropdown && (
                    <div className="dropdown-menu">
                      {
                        regions.map((item) => (
                          <span 
                          onClick={() => {
                            setSelectedRegion(item);
                            setDropdown(false)
                          }} 
                          className="dropdown-items" 
                          style={{backgroundColor:preferredTheme.elementColor,color:preferredTheme.textColor}}>{item}</span>

                        ))
                      }
                  </div>
                  )}
                </div>
              </div>
              <div className="grid">
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
              </div>
            </div>
          )
        }
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default App;
