export type ContextState = {
  bill: number | null;
  errors: boolean | null;
  peopleNumber: number | null;
  tipPercentaje: number | null;
};

export type Property =
  | 'bill'
  | 'tipPercentage'
  | 'peopleNumber'
  | 'totalByPerson'
  | 'tipAmmountByPerson'
  | 'errors';
