import Image from 'next/image';
import SectionSpan from './spans/SectionSpan';

interface InputProps {
  icon: string;
  iconAlt: string;
  iconWidth?: number;
  label: string;
  onChange: (target: any) => void;
  placeholder: string;
  value: number;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon,
  iconAlt,
  iconWidth = 16,
  label,
  onChange,
  placeholder,
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

      <input
        type='text'
        className={`
        bg-[#f4fafa]
        border-2
        ${error ? 'border-red-500' : 'border-transparent'}
        duration-300
        focus:border-cyan-400
        font-bold
        hover:border-cyan-400
        hover:cursor-pointer 
        outline-none
        p-2
        rounded-lg
        text-[#00494d]
        text-2xl
        text-right
        transition
        w-full
        `}
        placeholder={placeholder}
        value={value > 0 ? value : ''}
        onChange={onChange}
      />
    </div>
  </>
);

export default Input;
