interface NumericInputProps {
  hasError?: boolean;
  onChange: (target: any) => void;
  value: number;
}

const NumericInput: React.FC<NumericInputProps> = ({
  hasError,
  onChange,
  value,
}) => (
  <input
    type='text'
    className={`
  ${hasError ? 'border-red-500' : 'border-transparent'}
  bg-[#f4fafa]
  border-2
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
    placeholder='0'
    value={value > 0 ? value.toString() : ''}
    onChange={onChange}
  />
);

export default NumericInput;
