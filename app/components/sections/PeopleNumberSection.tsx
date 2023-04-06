import Input from '../Input';
import SectionSpan from '../spans/SectionSpan';

import personIcon from '../../assets/icon-person.svg';

const PeopleNumberSection = () => {
  return (
    <div className='mt-4'>
      <SectionSpan>Number of People</SectionSpan>
      <Input
        placeholder='0'
        icon={personIcon}
        iconWidth={20}
        iconAlt='person icon'
      />
    </div>
  );
};

export default PeopleNumberSection;
