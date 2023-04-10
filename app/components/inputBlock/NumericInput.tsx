'use client';

import { InputType } from './types';
import { useNumericInput } from './useNumericInput';

interface NumericInputProps {
  hasError?: boolean;
  inputType: InputType;
}

const NumericInput: React.FC<NumericInputProps> = ({ hasError, inputType }) => {
  const { onInputChange, onBlur, value } = useNumericInput(inputType);

  return (
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
      value={value || value === 0 ? value : ''}
      onChange={onInputChange}
      onBlur={onBlur}
    />
  );
};

export default NumericInput;
