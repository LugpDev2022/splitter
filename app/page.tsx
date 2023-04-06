import Input from './components/Input';
import Title from './components/Title';
import Button from './components/buttons/Button';
import SectionSpan from './components/spans/SectionSpan';

import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';
import AmmountSpan from './components/spans/AmmountSpan';

const percentages = ['5%', '10%', '15%', '25%', '50%'];

const page = () => {
  return (
    <div
      className='
      flex
      flex-col
      gap-8
      justify-end
      md:justify-center
      min-h-[1020px]
      md:min-h-0
      '
      style={{ height: '100%', alignItems: 'center' }}
    >
      <header className='flex flex-col justify-center'>
        <Title />
      </header>

      <div
        className=' 
      bg-white
      gap-7
      grid
      grid-cols-1
      lg:w-9/12
      md:grid-cols-2
      md:rounded-[30px]
      md:w-11/12
      p-7
      rounded-t-[35px]
      w-full
      '
      >
        <div>
          <div>
            <SectionSpan>Bill</SectionSpan>
            <Input placeholder='0' icon={dollarIcon} iconAlt='dollar icon' />
          </div>
          <div className='mt-4'>
            <SectionSpan>Select Tip %</SectionSpan>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {percentages.map((percentage: string) => (
                <Button key={percentage}>{percentage}</Button>
              ))}
            </div>
          </div>
          <div className='mt-4'>
            <SectionSpan>Number of People</SectionSpan>
            <Input
              placeholder='0'
              icon={personIcon}
              iconWidth={20}
              iconAlt='person icon'
            />
          </div>
        </div>
        <div className='bg-[#00494d] rounded-xl p-7 flex flex-col justify-between'>
          <div>
            <AmmountSpan ammount={0.0}>Tip Ammmount</AmmountSpan>
            <AmmountSpan ammount={0.0}>Total</AmmountSpan>
          </div>
          <Button active className='w-full'>
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
