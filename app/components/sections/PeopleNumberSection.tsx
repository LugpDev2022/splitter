'use client';

import personIcon from '../../assets/icon-person.svg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import InputBlock from '../inputBlock/InputBlock';

const PeopleNumberSection = () => {
  const { errors } = useContext<any>(AppContext);

  return (
    <InputBlock
      icon={personIcon}
      iconWidth={20}
      iconAlt='person icon'
      label='Number of People'
      inputType='peopleNumber'
    />
  );
};

export default PeopleNumberSection;
