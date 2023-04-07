'use client';

import { useState } from 'react';
import { AppContext } from './AppContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [initialValue, setInitialValue] = useState({
    bill: 0,
    tipPercentaje: null,
    peopleNumber: 0,
  });

  const handleBillChange = (newValue: number) => {
    setInitialValue({ ...initialValue, bill: newValue });
  };

  const handlePeopleNumberChange = (newValue: number) => {
    setInitialValue({ ...initialValue, peopleNumber: newValue });
  };

  return (
    <AppContext.Provider
      value={{ ...initialValue, handleBillChange, handlePeopleNumberChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
