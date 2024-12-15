// src/components/IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addIngredient }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={() => addIngredient(ingredient)}
          buttonLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;