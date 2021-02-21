import React, { useState } from 'react';

interface Props {
  title: string;
}

const FilterBtn = ({ title }: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <span className={`filter-btn ${checked ? 'is-checked' : ''}`}>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        id={title}
        name={title}
        value={title}
      />
      <label htmlFor={title}>{title}</label>
    </span>
  );
};

export default FilterBtn;
