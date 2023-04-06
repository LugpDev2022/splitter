import Input from './components/Input';
import Title from './components/Title';
import SectionSpan from './components/spans/SectionSpan';
import dollar from './assets/icon-dollar.svg';

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
      </div>
    </div>
  );
};

export default page;
