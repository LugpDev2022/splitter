'use client';

import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [contextValue, setContextValue] = useState({
    bill: 0,
    tipPercentaje: 0,
    peopleNumber: 0,
    totalByPerson: 0,
    tipAmmountByPerson: 0,
  });

  useEffect(() => {
    if (
      contextValue.bill <= 0 ||
      contextValue.peopleNumber <= 0 ||
      contextValue.tipPercentaje === 0
    )
      return;

    const average = contextValue.bill / contextValue.peopleNumber;
    const tipAmmountByPerson = parseFloat(
      ((average * contextValue.tipPercentaje) / 100).toFixed(2)
    );
    const totalByPerson = parseFloat((average + tipAmmountByPerson).toFixed(2));

    setContextValue({
      ...contextValue,
      totalByPerson,
      tipAmmountByPerson,
    });
  }, [
    contextValue.bill,
    contextValue.peopleNumber,
    contextValue.tipPercentaje,
  ]);

  const handleBillChange = (newValue: number) => {
    setContextValue({ ...contextValue, bill: newValue });
  };

  const handlePeopleNumberChange = (newValue: number) => {
    setContextValue({ ...contextValue, peopleNumber: newValue });
  };

  const setTipPercentaje = (newValue: number) => {
    setContextValue({ ...contextValue, tipPercentaje: newValue });
  };

  return (
    <AppContext.Provider
      value={{
        ...contextValue,
        handleBillChange,
        handlePeopleNumberChange,
        setTipPercentaje,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
