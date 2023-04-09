'use client';

import { useContext } from 'react';
import Button from '../buttons/Button';
import AmmountSpan from '../spans/AmmountSpan';
import { AppContext } from '../context/AppContext';

const AmmountSection = () => {
  const {
    totalByPerson,
    tipAmmountByPerson,
    resetChanges,
    bill,
    peopleNumber,
    tipPercentaje,
  } = useContext<any>(AppContext);

  return (
    <div className='bg-[#00494d] rounded-xl p-7 flex flex-col justify-between'>
      <div>
        <AmmountSpan ammount={tipAmmountByPerson}>Tip Ammmount</AmmountSpan>
        <AmmountSpan ammount={totalByPerson}>Total</AmmountSpan>
      </div>
      <Button
        active
        className='w-full'
        disabled={bill <= 0 || peopleNumber <= 0 || tipPercentaje === 0}
        onClick={resetChanges}
      >
        RESET
      </Button>
    </div>
  );
};

export default AmmountSection;
