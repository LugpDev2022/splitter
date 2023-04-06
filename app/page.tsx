import Title from './components/Title';

const page = () => {
  return (
    <>
      <header className='h-1/5 flex flex-col justify-center'>
        <Title />
      </header>

      <div className='h-full bg-white rounded-t-[35px] p-6'></div>
    </>
  );
};

export default page;
