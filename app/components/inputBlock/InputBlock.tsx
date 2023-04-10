import Image from 'next/image';
import SectionSpan from '../spans/SectionSpan';
import NumericInput from './NumericInput';
import ErrorSpan from '../spans/ErrorSpan';

interface InputBlockProps {
  hasError?: boolean;
  icon: string;
  iconAlt: string;
  iconWidth?: number;
  label: string;
  onBlur: (target: any) => void;
  onChange: (target: any) => void;
  value: number;
}

const InputBlock: React.FC<InputBlockProps> = ({
  hasError = false,
  icon,
  iconAlt,
  iconWidth = 16,
  label,
  onBlur,
  onChange,
  value,
}) => (
  <>
    <div className='flex flex-row justify-between'>
      <SectionSpan>{label}</SectionSpan>
      <ErrorSpan show={hasError}>Can&apos;t be zero</ErrorSpan>
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

      <NumericInput onChange={onChange} value={value} onBlur={onBlur} />
    </div>
  </>
);

export default InputBlock;
