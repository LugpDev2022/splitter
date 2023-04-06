import Image from 'next/image';

interface InputProps {
  icon: string;
  iconAlt: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, icon, iconAlt }) => {
  return (
    <div className='mt-2'>
      <div
        className='absolute flex flex-col justify-center pl-3'
        style={{ height: '60px' }}
      >
        <Image
          src={icon}
          alt={iconAlt}
          style={{ height: '23px', width: '16px' }}
        />
      </div>

      <input
        type='text'
        className='
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
        text-2xl
        text-right
        transition
        w-full'
        style={{
          background: 'hsl(189, 41%, 97%)',
          color: 'hsl(183, 100%, 15%)',
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
