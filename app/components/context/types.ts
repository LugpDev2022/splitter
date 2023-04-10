export type ContextState = {
  bill: number;
  errors: boolean;
  peopleNumber: number;
  tipAmmountByPerson: number;
  tipPercentaje: number;
  totalByPerson: number;
};

export type Property =
  | 'bill'
  | 'tipPercentage'
  | 'peopleNumber'
  | 'totalByPerson'
  | 'tipAmmountByPerson'
  | 'errors';
