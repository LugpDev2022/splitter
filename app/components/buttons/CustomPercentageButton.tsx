import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AppContext } from '../context/AppContext';

//TODO: Avoid enter letters in input
const CustomPercentageButton = () => {
  const { tipPercentaje, updateContext } = useContext<any>(AppContext);
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onClick = () => {
    updateContext(inputValue, 'tipPercentaje');
    setActive(true);
  };

  useEffect(() => {
    updateContext(inputValue, 'tipPercentaje');
  }, [inputValue]);

  useEffect(() => {
    if (tipPercentaje === inputValue) return setActive(true);

    setActive(false);
  }, [tipPercentaje]);

  const onChange = ({ target }: { target: any }) => {
    const { value } = target;
    setInputValue(value);
  };

  return (
    <input
      className={`
      ${active ? 'text-cyan-900' : ' text-[#00494d]'}
      ${active ? 'border-cyan-400' : 'border-transparent'}
      border-2
      duration-300
      font-bold
      hover:border-cyan-400
      hover:cursor-pointer
      hover:text-cyan-900
      outline-none
      p-4
      placeholder:text-[#5e7a7d]
      placeholder:text-center
      rounded-lg
      text-right
      text-xl
      transition
      `}
      type='text'
      placeholder='CUSTOM'
      value={inputValue}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default CustomPercentageButton;
