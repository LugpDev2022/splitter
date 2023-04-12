import CostSpan from './spans/CostSpan';

type AmmountLabel = 'Tip Ammount' | 'Total';

interface AmmountBlock {
  ammount: number;
  label: AmmountLabel;
}

const AmmountBlock: React.FC<AmmountBlock> = ({ label, ammount }) => (
  <div className='flex flex-col justify-between mb-8'>
    <div className='flex flex-col mb-2'>
      <span className='text-white font-bold tracking-wide'>{label}</span>
      <span className='text-[#7f9c9f]'>/ person</span>
    </div>
    <CostSpan quantity={ammount} />
  </div>
);

export default AmmountBlock;
