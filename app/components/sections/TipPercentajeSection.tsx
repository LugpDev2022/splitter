'use client';

import { useContext } from 'react';
import Button from '../buttons/Button';
import SectionSpan from '../spans/SectionSpan';
import { AppContext } from '../context/AppContext';
import CustomPercentageButton from '../buttons/CustomPercentageButton';

const percentages = [5, 10, 15, 25, 50];

//TODO: Correct the name
const TipPercentajeSection = () => {
  const { tipPercentaje, updateContext } = useContext<any>(AppContext);

  const onClick = (percentaje: number) => {
    updateContext(percentaje, 'tipPercentaje');
  };

  return (
    <div className='my-4'>
      <SectionSpan>Select Tip %</SectionSpan>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {percentages.map((percentage: number) => (
          <Button
            key={percentage}
            active={tipPercentaje === percentage}
            onClick={() => onClick(percentage)}
          >
            {percentage}%
          </Button>
        ))}

        <CustomPercentageButton />
      </div>
    </div>
  );
};

export default TipPercentajeSection;
