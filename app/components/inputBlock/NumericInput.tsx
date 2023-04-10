interface NumericInputProps {
  hasError?: boolean;
  onBlur: (target: any) => void;
  onChange: (target: any) => void;
  value: number;
}

//Note: This component requires a onChange function that cleans the input value if it is 0
const NumericInput: React.FC<NumericInputProps> = ({
  hasError,
  onBlur,
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
    value={value ? value : ''}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export default NumericInput;
