import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconSize } from '../utils/iconSize';
import {
  faBirthdayCake,
  faWineGlass,
  faWineBottle,
  faPizzaSlice,
  faHamburger,
  faFish,
  faCarrot,
  faAppleAlt,
  faIceCream,
  faPepperHot,
  faLemon,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/icon.scss';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomIcon = () => {
  const icons = [
    faBirthdayCake,
    faWineGlass,
    faWineBottle,
    faPizzaSlice,
    faHamburger,
    faFish,
    faCarrot,
    faAppleAlt,
    faIceCream,
    faPepperHot,
    faLemon,
  ];
  const randomNum = getRandomInt(icons.length);
  return icons[randomNum];
};

interface Props {
  iconSize: iconSize;
  spin?: boolean;
}

const Spinner = ({ iconSize, spin = true }: Props) => {
  return (
    <div className="response-icon">
      <FontAwesomeIcon
        className="spinner-icon"
        icon={getRandomIcon()}
        spin={spin}
        size={iconSize}
      />
    </div>
  );
};

export default Spinner;
