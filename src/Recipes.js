import React from 'react'
import style from './recipes.module.css';
function Recipes({title,image,calories,ingredients}) {
  return (
    <div className={style.recipe}>
        
      <h1 >
        {  title}
      </h1>
      <ol>
          {ingredients.map(ingredient=>(
              <li>{ingredient.text}</li>
          ))}
      </ol>
        <p>
            {calories}
        </p>
        <img src={image}alt={title}/>
        </div>
  )
}

export default Recipes