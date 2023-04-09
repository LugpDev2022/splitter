import CostSpan from './spans/CostSpan';

interface AmmountBlock {
  ammount: number;
  label: string;
}

const AmmountBlock: React.FC<AmmountBlock> = ({ label, ammount }) => (
  <div className='flex flex-row justify-between mb-10'>
    <div className='grid grid-rows-2'>
      <span className='text-white font-bold tracking-wide'>{label}</span>
      <span className='text-[#7f9c9f]'>/ person</span>
    </div>
    <CostSpan quantity={ammount} />
  </div>
);

export default AmmountBlock;
