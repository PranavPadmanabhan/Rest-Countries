import React from 'react';
import './App.css';
import ThemeContextProvider from './constants/ThemeContext';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './screens/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {

  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeContextProvider>
        <Routes location={"/"}>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
