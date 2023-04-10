'use client';

import personIcon from '../../assets/icon-person.svg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import InputBlock from '../inputBlock/InputBlock';

const PeopleNumberSection = () => {
  const { peopleNumber, errors } = useContext<any>(AppContext);

  return (
    <div className='mt-4'>
      <InputBlock
        icon={personIcon}
        iconWidth={20}
        iconAlt='person icon'
        value={peopleNumber}
        label='Number of People'
        inputType='peopleNumber'
      />
    </div>
  );
};

export default PeopleNumberSection;
