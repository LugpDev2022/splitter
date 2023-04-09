interface CostSpanProps {
  quantity: number;
}

const CostSpan: React.FC<CostSpanProps> = ({ quantity }) => (
  <span className='text-teal-500 text-5xl font-bold'>
    ${quantity <= 0 ? '0.00' : quantity.toString()}
  </span>
);

export default CostSpan;
