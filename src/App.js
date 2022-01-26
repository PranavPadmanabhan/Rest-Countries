import React from 'react';
import './App.css';
import ThemeContextProvider from './constants/ThemeContext';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './screens/Home/Home';

function App() {

  
  return (
    <Router>
      <ThemeContextProvider>
        <Routes >
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
