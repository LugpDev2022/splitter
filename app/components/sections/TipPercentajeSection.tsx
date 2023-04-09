'use client';

import { useContext } from 'react';
import Button from '../buttons/Button';
import SectionSpan from '../spans/SectionSpan';
import { AppContext } from '../context/AppContext';

const percentages = [5, 10, 15, 25, 50];

const TipPercentajeSection = () => {
  const { tipPercentaje, setTipPercentage } = useContext<any>(AppContext);

  return (
    <div className='mt-4'>
      <SectionSpan>Select Tip %</SectionSpan>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {percentages.map((percentage: number) => (
          <Button
            key={percentage}
            active={tipPercentaje === percentage}
            onClick={() => setTipPercentage(percentage)}
          >
            {percentage}%
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TipPercentajeSection;
