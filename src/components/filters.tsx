import React from 'react';
import { RecipieType } from '../models/recipieType.enum';
import FilterBtn from './filterBtn';
import '../styles/filters.scss';

const Filters = (): JSX.Element => {
  const recipieTypes: string[] = Object.values(RecipieType);
  return (
    <form>
      {recipieTypes.map((recipieType: string, i: number) => (
        <FilterBtn key={i} title={recipieType} />
      ))}
    </form>
  );
};

export default Filters;
