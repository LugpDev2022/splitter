'use client';

import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import dollarIcon from '../../assets/icon-dollar.svg';
import InputBlock from '../inputBlock/InputBlock';

const BillSection = () => {
  const { bill, errors } = useContext<any>(AppContext);

  return (
    <div>
      <InputBlock
        icon={dollarIcon}
        iconAlt='dollar icon'
        value={bill}
        label='Bill'
        inputType='bill'
      />
    </div>
  );
};

export default BillSection;
