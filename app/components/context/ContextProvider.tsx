'use client';

import { useState } from 'react';
import { AppContext } from './AppContext';
import { ContextState, Property } from './types';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const initialState: ContextState = {
    bill: null,
    errors: false,
    peopleNumber: null,
    tipPercentaje: 0,
  };

  const [contextValue, setContextValue] = useState(initialState);

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
