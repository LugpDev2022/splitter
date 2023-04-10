import Image from 'next/image';
import SectionSpan from '../spans/SectionSpan';
import NumericInput from './NumericInput';
import ErrorSpan from '../spans/ErrorSpan';
import { InputType } from './types';

interface InputBlockProps {
  hasError?: boolean;
  icon: string;
  iconAlt: string;
  iconWidth?: number;
  inputType: InputType;
  label: string;
}

const InputBlock: React.FC<InputBlockProps> = ({
  hasError = false,
  icon,
  iconAlt,
  iconWidth = 16,
  inputType,
  label,
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

      <NumericInput inputType={inputType} />
    </div>
  </>
);

export default InputBlock;
