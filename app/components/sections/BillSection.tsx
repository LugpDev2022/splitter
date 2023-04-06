import Input from '../Input';
import SectionSpan from '../spans/SectionSpan';

import dollarIcon from '../../assets/icon-dollar.svg';

const BillSection = () => {
  return (
    <div>
      <SectionSpan>Bill</SectionSpan>
      <Input placeholder='0' icon={dollarIcon} iconAlt='dollar icon' />
    </div>
  );
};

export default BillSection;
