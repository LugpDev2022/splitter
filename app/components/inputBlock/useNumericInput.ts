import { useCallback, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { InputType } from './types';

export const useNumericInput = (inputType: InputType) => {
  const { updateContext, bill, peopleNumber } = useContext<any>(AppContext);

  const onBlur = useCallback(
    ({ target }: { target: any }) => {
      const { value } = target;

      if (parseInt(value.charAt(0)) === 0) {
        const newValue = parseInt(value.slice(1));
        updateContext(newValue, inputType);
      }

      if (value > 0) return;

      updateContext(null, inputType);
    },
    [inputType, updateContext]
  );

  const onInputChange = useCallback(
    ({ target }: { target: any }) => {
      const { value } = target;

      if (
        isNaN(Number(value)) ||
        Number(value) < 0 ||
        Number(value) > (inputType === 'bill' ? 50000 : 50)
      )
        return;

      updateContext(parseInt(value), inputType);
    },
    [inputType, updateContext]
  );

  return {
    onBlur,
    onInputChange,
    value: inputType === 'bill' ? bill : peopleNumber,
  };
};
