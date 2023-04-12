type ReturnValue = {
  tip: number;
  total: number;
};

export const getTotalByPerson = (
  bill: number,
  tipPercentage: number,
  peopleNumber: number
): ReturnValue => {
  const average = bill / peopleNumber;
  const tip = parseFloat(((average * tipPercentage) / 100).toFixed(2));
  const total = parseFloat((average + tip).toFixed(2));

  return { tip, total };
};
