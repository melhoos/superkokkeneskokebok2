import React, { useState, useContext } from 'react';
import { RecipieFilterContext } from '../providers/recipieFilterProvider';

interface Props {
  title: string;
}

const FilterBtn = ({ title }: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const { updateRecipieTypes } = useContext(RecipieFilterContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    updateRecipieTypes(e.target.value);
  };

  return (
    <span className={`filter-btn ${checked ? 'is-checked' : ''}`}>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
        id={title}
        name={title}
        value={title}
      />
      <label htmlFor={title}>{title}</label>
    </span>
  );
};

export default FilterBtn;
