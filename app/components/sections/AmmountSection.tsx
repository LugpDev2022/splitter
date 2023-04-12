'use client';

import useAmmount from '@/app/hooks/useAmmount';
import Button from '../buttons/Button';
import AmmountBlock from '../AmmountBlock';

const AmmountSection = () => {
  const {
    tipAmmountByPerson,
    totalByPerson,
    bill,
    peopleNumber,
    tipPercentage,
    onResetChanges,
  } = useAmmount();

  return (
    <div className='bg-[#00494d] rounded-xl p-7 flex flex-col justify-between'>
      <div>
        <AmmountBlock ammount={tipAmmountByPerson} label='Tip Ammount' />
        <AmmountBlock ammount={totalByPerson} label='Total' />
      </div>
      <Button
        active
        className='w-full'
        disabled={bill <= 0 && peopleNumber <= 0 && tipPercentage === 0}
        onClick={onResetChanges}
      >
        RESET
      </Button>
    </div>
  );
};

export default AmmountSection;
