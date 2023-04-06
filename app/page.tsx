import Title from './components/Title';
import SectionSpan from './components/spans/SectionSpan';

const page = () => {
  return (
    <>
      <header className='h-1/5 flex flex-col justify-center'>
        <Title />
      </header>

      <div className='h-full bg-white rounded-t-[35px] p-7'>
        <div>
          <SectionSpan>Bill</SectionSpan>
        </div>
      </div>
    </>
  );
};

export default page;
