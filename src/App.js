import API_KEY from './API_KEY';
import API_ID from './API_ID';
import { useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes';
 

function App() {
 

const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery] = useState('vegetables');


useEffect(()=>{
getRecipes();
},[query]);

const getRecipes = async()=>{
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
const data= await response.json();
setRecipes(data.hits);
 

};
const updateSearch = e =>{
  setSearch(e.target.value);
   
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
};

  return (
     <div className='App'>
     
     <form onSubmit = {getSearch} className='search-form'>
       <input className='search-bar' type="text" value={search} onChange ={updateSearch} />
       <button className=' search-button' type='submit'>search</button>
       
      </form>
     <div className="recipes">
    {recipes.map(recipe=>(
       <Recipes  key = {recipe.recipe.label}title={recipe.recipe.label} calories={recipe.recipe.calories}
       image = {recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}

       />
       
    ))};
    </div>
     </div>
  );
}

export default App;
