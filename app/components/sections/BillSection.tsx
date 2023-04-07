'use client';

import { useCallback, useContext } from 'react';

import Input from '../Input';
import SectionSpan from '../spans/SectionSpan';
import { AppContext } from '../context/AppContext';

import dollarIcon from '../../assets/icon-dollar.svg';

const BillSection = () => {
  const { bill, handleBillChange } = useContext<any>(AppContext);

  const onChange = useCallback(
    ({ target }: { target: any }) => {
      const { value } = target;
      handleBillChange(value);
    },
    [handleBillChange]
  );

  return (
    <div>
      <SectionSpan>Bill</SectionSpan>
      <Input
        placeholder='0'
        icon={dollarIcon}
        iconAlt='dollar icon'
        value={bill}
        onChange={onChange}
      />
    </div>
  );
};

export default BillSection;
