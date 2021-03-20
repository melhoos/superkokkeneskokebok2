import React, { useContext } from 'react';
import { Recipie } from '../models/recipie.model';
import { recipies } from '../utils/recipies';
import RecipieBlock from './recipieblock';
import { RecipieFilterContext } from '../providers/recipieFilterProvider';

import '../styles/recipies.scss';
import { RecipieType } from '../models/recipieType.enum';

const Recipies = (): JSX.Element => {
  const { recipieTypes } = useContext(RecipieFilterContext);

  const containsInRecipieTypes = (recipie: Recipie): boolean => {
    const types = recipie.types;
    return types.some((t: RecipieType) => {
      return recipieTypes.includes(t);
    });
  };

  const getRecipiesToShow = (): Recipie[] => {
    if (recipieTypes.length === 0) {
      return recipies;
    } else {
      return recipies.filter((recipie: Recipie) =>
        containsInRecipieTypes(recipie)
      );
    }
  };

  return (
    <div className="recipies">
      {getRecipiesToShow().map((recipie: Recipie, i: number) => (
        <RecipieBlock recipie={recipie} key={i} />
      ))}
    </div>
  );
};

export default Recipies;
