import Image from 'next/image';
import SectionSpan from '../spans/SectionSpan';
import Input from './NumericInput';
import NumericInput from './NumericInput';

interface InputBlockProps {
  icon: string;
  iconAlt: string;
  iconWidth?: number;
  label: string;
  onChange: (target: any) => void;
  value: number;
  error?: boolean;
}

const InputBlock: React.FC<InputBlockProps> = ({
  icon,
  iconAlt,
  iconWidth = 16,
  label,
  onChange,
  value,
  error = false,
}) => (
  <>
    <div className='flex flex-row justify-between'>
      <SectionSpan>{label}</SectionSpan>
      <span
        className={`text-red-500 font-semibold text-lg text-right ${
          error ? 'block' : 'hidden'
        }`}
      >
        Can&apos;t be zero
      </span>
    </div>

    <div className='mt-2'>
      <div
        className='absolute flex flex-col justify-center pl-3'
        style={{ height: '60px' }}
      >
        <Image
          src={icon}
          alt={iconAlt}
          style={{ height: '23px', width: `${iconWidth}px` }}
        />
      </div>

      <NumericInput onChange={onChange} value={value} onBlur={() => {}} />
    </div>
  </>
);

export default InputBlock;
