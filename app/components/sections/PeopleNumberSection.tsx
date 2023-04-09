'use client';

import Input from '../Input';
import SectionSpan from '../spans/SectionSpan';

import personIcon from '../../assets/icon-person.svg';
import { useCallback, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PeopleNumberSection = () => {
  const { peopleNumber, handlePeopleNumberChange, errors, tipPercentaje } =
    useContext<any>(AppContext);

  const onChange = useCallback(
    ({ target }: { target: any }) => {
      const { value } = target;
      handlePeopleNumberChange(value);
    },
    [handlePeopleNumberChange]
  );

  return (
    <div className='mt-4'>
      <Input
        placeholder='0'
        icon={personIcon}
        iconWidth={20}
        iconAlt='person icon'
        value={peopleNumber}
        onChange={onChange}
        label='Number of People'
        error={errors && peopleNumber <= 0}
      />
    </div>
  );
};

export default PeopleNumberSection;
