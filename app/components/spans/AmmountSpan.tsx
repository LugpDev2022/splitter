interface AmmountSpanProps {
  children: React.ReactNode;
  ammount: number;
}

const AmmountSpan: React.FC<AmmountSpanProps> = ({ children, ammount }) => {
  return (
    <div className='flex flex-row justify-between mb-10'>
      <div className='grid grid-rows-2'>
        <span className='text-white font-bold tracking-wide'>{children}</span>
        <span className='text-[#7f9c9f]'>/ person</span>
      </div>
      <span className='text-teal-500 text-5xl font-bold'>
        ${ammount <= 0 ? '0.00' : ammount}
      </span>
    </div>
  );
};

export default AmmountSpan;
