import React, { useState } from 'react';
import { Recipie } from '../models/recipie.model';
import { recipies } from '../utils/recipies';
import RecipieBlock from './recipieblock';
import '../styles/recipies.scss';

const Recipies = (): JSX.Element => {
  const [shownRecipies, setShownRecipies] = useState<Recipie[]>(recipies);
  return (
    <div className="recipies">
      {shownRecipies.map((recipie: Recipie) => (
        <RecipieBlock recipie={recipie} />
      ))}
    </div>
  );
};

export default Recipies;
