import Image from 'next/image';

interface InputProps {
  icon: string;
  iconAlt: string;
  placeholder: string;
  iconWidth?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  iconAlt,
  iconWidth = 16,
}) => {
  return (
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
        className='
        bg-[#f4fafa]
        border-2
        border-transparent
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
        '
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
