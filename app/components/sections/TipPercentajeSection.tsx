import Button from '../buttons/Button';
import SectionSpan from '../spans/SectionSpan';

const percentages = ['5%', '10%', '15%', '25%', '50%'];

const TipPercentajeSection = () => {
  return (
    <div className='mt-4'>
      <SectionSpan>Select Tip %</SectionSpan>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {percentages.map((percentage: string) => (
          <Button key={percentage}>{percentage}</Button>
        ))}
      </div>
    </div>
  );
};

export default TipPercentajeSection;
