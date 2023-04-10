'use client';

import { useCallback, useContext } from 'react';

import { AppContext } from '../context/AppContext';

import dollarIcon from '../../assets/icon-dollar.svg';
import InputBlock from '../inputBlock/InputBlock';

const BillSection = () => {
  const { bill, handleBillChange, errors } = useContext<any>(AppContext);

  const onChange = useCallback(
    ({ target }: { target: any }) => {
      const { value } = target;

      if (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 50000)
        return;

      handleBillChange(value);
    },
    [handleBillChange]
  );

  return (
    <div>
      <InputBlock
        icon={dollarIcon}
        iconAlt='dollar icon'
        value={bill}
        onChange={onChange}
        label='Bill'
        error={errors && bill <= 0}
      />
    </div>
  );
};

export default BillSection;
