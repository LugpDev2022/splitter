'use client';

import { useCallback, useContext } from 'react';

import { AppContext } from '../context/AppContext';

import dollarIcon from '../../assets/icon-dollar.svg';
import InputBlock from '../input/InputBlock';

const BillSection = () => {
  const { bill, handleBillChange, errors } = useContext<any>(AppContext);

  const onChange = useCallback(
    ({ target }: { target: any }) => {
      const { value } = target;
      handleBillChange(value);
    },
    [handleBillChange]
  );

  return (
    <div>
      <InputBlock
        placeholder='0'
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
