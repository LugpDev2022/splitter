import { useContext, useEffect, useMemo, useState } from 'react';
import { getTotalByPerson } from '../helpers/getTotalByPerson';
import { AppContext } from '../components/context/AppContext';

const initialState = {
  tipAmmountByPerson: 0,
  totalByPerson: 0,
};

const useAmmount = () => {
  const {
    onResetChanges,
    bill,
    peopleNumber,
    tipPercentaje: tipPercentage,
  } = useContext<any>(AppContext);

  const [{ tipAmmountByPerson, totalByPerson }, setAmmountState] =
    useState(initialState);

  useEffect(() => {
    if (
      !(bill && peopleNumber && tipPercentage) ||
      bill <= 0 ||
      peopleNumber <= 0 ||
      tipPercentage === 0
    )
      return setAmmountState(initialState);

    const { tip, total } = getTotalByPerson(bill, tipPercentage, peopleNumber);

    setAmmountState({ tipAmmountByPerson: tip, totalByPerson: total });
  }, [bill, peopleNumber, tipPercentage]);

  return {
    tipAmmountByPerson,
    totalByPerson,
    bill,
    peopleNumber,
    tipPercentage,
    onResetChanges,
  };
};

export default useAmmount;
