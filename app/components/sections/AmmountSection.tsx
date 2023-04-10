'use client';

import { useContext } from 'react';
import Button from '../buttons/Button';
('../AmmountBlock');
import { AppContext } from '../context/AppContext';
import AmmountBlock from '../AmmountBlock';

const AmmountSection = () => {
  const {
    totalByPerson,
    tipAmmountByPerson,
    onResetChanges,
    bill,
    peopleNumber,
    tipPercentaje,
  } = useContext<any>(AppContext);

  return (
    <div className='bg-[#00494d] rounded-xl p-7 flex flex-col justify-between'>
      <div>
        <AmmountBlock ammount={tipAmmountByPerson} label='Tip Ammmount' />
        <AmmountBlock ammount={totalByPerson} label='Total' />
      </div>
      <Button
        active
        className='w-full'
        disabled={bill <= 0 && peopleNumber <= 0 && tipPercentaje === 0}
        onClick={onResetChanges}
      >
        RESET
      </Button>
    </div>
  );
};

export default AmmountSection;
