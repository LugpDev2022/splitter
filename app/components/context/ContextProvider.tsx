'use client';

import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

type Property =
  | 'bill'
  | 'tipPercentage'
  | 'peopleNumber'
  | 'totalByPerson'
  | 'tipAmmountByPerson'
  | 'errors';

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const initialState = {
    bill: 0,
    tipPercentaje: 0,
    peopleNumber: 0,
    totalByPerson: 0,
    tipAmmountByPerson: 0,
    errors: false,
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
    setContextValue({ ...contextValue, [property]: newValue });
  };

  //TODO: Dejar de usar estas 3 funciones y usar la anterior en su lugar
  const handleBillChange = (newValue: number) => {
    setContextValue({ ...contextValue, bill: newValue });
  };

  const handlePeopleNumberChange = (newValue: number) => {
    setContextValue({ ...contextValue, peopleNumber: newValue });
  };

  const setTipPercentage = (newValue: number) => {
    setContextValue({ ...contextValue, tipPercentaje: newValue });
  };

  const resetChanges = () => setContextValue(initialState);

  return (
    <AppContext.Provider
      value={{
        ...contextValue,
        handleBillChange,
        handlePeopleNumberChange,
        setTipPercentage,
        resetChanges,
        updateContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
