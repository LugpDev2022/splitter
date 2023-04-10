'use client';

import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { ContextState, Property } from './types';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const initialState: ContextState = {
    bill: 0,
    errors: false,
    peopleNumber: 0,
    tipAmmountByPerson: 0,
    tipPercentaje: 0,
    totalByPerson: 0,
  };

  const [contextValue, setContextValue] = useState(initialState);

  const { bill, tipPercentaje, peopleNumber } = contextValue;

  useEffect(() => {
    if (bill <= 0 || peopleNumber <= 0 || tipPercentaje === 0)
      return setContextValue({
        ...contextValue,
        tipAmmountByPerson: 0,
        totalByPerson: 0,
        errors: true,
      });

    const average = bill / peopleNumber;
    const tip = parseFloat(((average * tipPercentaje) / 100).toFixed(2));
    const total = parseFloat((average + tip).toFixed(2));

    setContextValue({
      ...contextValue,
      tipAmmountByPerson: tip,
      totalByPerson: total,
    });
  }, [bill, peopleNumber, tipPercentaje]);

  const updateContext = (newValue: boolean | number, property: Property) => {
    setContextValue((state) => ({ ...state, [property]: newValue }));
  };

  const onResetChanges = () => setContextValue(initialState);

  return (
    <AppContext.Provider
      value={{
        ...contextValue,
        onResetChanges,
        updateContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
