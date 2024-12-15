// src/components/BurgerStack.jsx
import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeIngredient }) => {
  return (
    <ul className="burger-stack">
      {stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => removeIngredient(index)}
            buttonLabel="X"
          />
        ))
      )}
    </ul>
  );
};
// updated
export default BurgerStack;