import Input from './components/Input';
import Title from './components/Title';
import SectionSpan from './components/spans/SectionSpan';
import dollar from './assets/icon-dollar.svg';

const page = () => {
  return (
    <>
      <header className='h-1/5 flex flex-col justify-center'>
        <Title />
      </header>

      <div className='h-full bg-white rounded-t-[35px] p-7'>
        <div>
          <SectionSpan>Bill</SectionSpan>
          <Input placeholder='0' icon={dollar} iconAlt='dollar icon' />
        </div>
      </div>
    </>
  );
};

export default page;
