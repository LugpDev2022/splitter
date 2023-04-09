'use client';

import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const initialState = {
    bill: 0,
    tipPercentaje: 0,
    peopleNumber: 0,
    totalByPerson: 0,
    tipAmmountByPerson: 0,
  };

  const [contextValue, setContextValue] = useState(initialState);

  const { bill, tipPercentaje, peopleNumber } = contextValue;

  useEffect(() => {
    if (bill <= 0 || peopleNumber <= 0 || tipPercentaje === 0)
      return setContextValue({
        ...contextValue,
        tipAmmountByPerson: 0,
        totalByPerson: 0,
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

  const handleBillChange = (newValue: number) => {
    setContextValue({ ...contextValue, bill: newValue });
  };

  const handlePeopleNumberChange = (newValue: number) => {
    setContextValue({ ...contextValue, peopleNumber: newValue });
  };

  const setTipPercentaje = (newValue: number) => {
    setContextValue({ ...contextValue, tipPercentaje: newValue });
  };

  const resetChanges = () =>
    setContextValue({
      ...contextValue,
      bill: 0,
      tipPercentaje: 0,
      peopleNumber: 0,
    });

  return (
    <AppContext.Provider
      value={{
        ...contextValue,
        handleBillChange,
        handlePeopleNumberChange,
        setTipPercentaje,
        resetChanges,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
