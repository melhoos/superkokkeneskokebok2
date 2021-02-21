import React from 'react';
import chef from '../assets/svgs/chef.svg';

const Logo = (): JSX.Element => {
  return (
    <div className="App-logo">
      <img className="app-logo-img" src={chef} />
      <p className="app-logo-name">Superkokkeneskokebok</p>
    </div>
  );
};

export default Logo;
