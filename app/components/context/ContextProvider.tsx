'use client';

import { AppContext } from './AppContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        bill: 0,
        tipPercentaje: null,
        peopleNumber: 0,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
