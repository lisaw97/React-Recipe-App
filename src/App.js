import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = 'e873212f';
  const APP_KEY = '8d3190c4d6d004b3cea5acc4c1e64e4e';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
