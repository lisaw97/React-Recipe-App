import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'e873212f';
  const APP_KEY = '8d3190c4d6d004b3cea5acc4c1e64e4e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //   .then(response => {
    //     response.json
    //   });

    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={ search } 
          onChange={ updateSearch }
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(recipe => (
        <Recipe 
          key={ recipe.recipe.label }
          title={ recipe.recipe.label } 
          calories={ recipe.recipe.calories } 
          image={ recipe.recipe.image }
          ingredients={ recipe.recipe.ingredients }
        />
      ))}
    </div>
  );
}

export default App;
