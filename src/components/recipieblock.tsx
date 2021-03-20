import React, { useState } from 'react';
import { Recipie } from '../models/recipie.model';
import { RecipieType } from '../models/recipieType.enum';
import { Ingredient } from '../models/ingredient.model';

interface Props {
  recipie: Recipie;
}

const ingredientsList = (ingredients: Ingredient[]): JSX.Element => {
  const formattedIngredient = (ingredient: Ingredient): string => {
    return `${ingredient.volum > 0 ? ingredient.volum : ''} ${
      ingredient.unit
    } ${ingredient.ingredientName}`;
  };

  return (
    <div className="recipie-ingredients">
      <span>{`Ingredienser`}</span>
      <ol>
        {ingredients.map((ingredient: Ingredient, i: number) => (
          <li key={i}>{formattedIngredient(ingredient)}</li>
        ))}
      </ol>
    </div>
  );
};

const procedureList = (procedure: string[]): JSX.Element => {
  return (
    <div className="recipie-procedure">
      <span>{`Fremgangsmåte`}</span>
      <ol>
        {procedure.map((step: string, i: number) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

const recipieTypeString = (recipieTypes: RecipieType[]): JSX.Element => {
  return (
    <span className="recipie-types">
      {recipieTypes.map(
        (type: RecipieType, i: number) =>
          ` ${type}${i < recipieTypes.length - 1 ? ',' : ''}`
      )}
    </span>
  );
};

const RecipieBlock = ({ recipie }: Props): JSX.Element => {
  const [visibility, setVisiblity] = useState<boolean>(false);
  const recipieName = (recipie: Recipie): JSX.Element => {
    return <span className="recipie-name">{recipie.title}</span>;
  };
  return (
    <div className="recipie-block">
      <div className="recipie-title" onClick={() => setVisiblity(!visibility)}>
        {recipieName(recipie)}
        {recipieTypeString(recipie.types)}
      </div>
      <div className={`recipie-content ${visibility ? '' : 'close'}`}>
        {ingredientsList(recipie.ingredients)}
        {procedureList(recipie.procedure)}
      </div>
    </div>
  );
};

export default RecipieBlock;
