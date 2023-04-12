'use client';

import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import dollarIcon from '../../assets/icon-dollar.svg';
import InputBlock from '../inputBlock/InputBlock';

const BillSection = () => {
  const { errors } = useContext<any>(AppContext);

  return (
    <InputBlock
      icon={dollarIcon}
      iconAlt='dollar icon'
      label='Bill'
      inputType='bill'
    />
  );
};

export default BillSection;
