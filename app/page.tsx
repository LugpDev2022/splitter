import Input from './components/Input';
import Title from './components/Title';
import SectionSpan from './components/spans/SectionSpan';
import dollar from './assets/icon-dollar.svg';
import Button from './components/buttons/Button';

const percentages: number[] = [5, 10, 15, 25, 50];

const page = () => {
  return (
    <div
      className='
      flex
      flex-col
      gap-8
      justify-end
      md:justify-center'
      style={{ height: '100%', alignItems: 'center' }}
    >
      <header className='flex flex-col justify-center'>
        <Title />
      </header>

      <div className=' bg-white rounded-t-[35px] p-7 w-full md:w-11/12 lg:w-9/12'>
        <div>
          <SectionSpan>Bill</SectionSpan>
          <Input placeholder='0' icon={dollar} iconAlt='dollar icon' />
        </div>
        <div className='mt-4'>
          <SectionSpan>Select Tip %</SectionSpan>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {percentages.map((percentage: number) => (
              <Button key={percentage}>{percentage}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
