'use client';

import Input from '../Input';
import SectionSpan from '../spans/SectionSpan';

import personIcon from '../../assets/icon-person.svg';
import { useCallback, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PeopleNumberSection = () => {
  const { peopleNumber, handlePeopleNumberChange } =
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
      <SectionSpan>Number of People</SectionSpan>
      <Input
        placeholder='0'
        icon={personIcon}
        iconWidth={20}
        iconAlt='person icon'
        value={peopleNumber}
        onChange={onChange}
      />
    </div>
  );
};

export default PeopleNumberSection;
