export type PaymentBody = {
  name: string;
  ammount: number;
};

export type Payment = {
  id: string;
  name: string;
  ammount: number;
  code: string;
  grid: string[][];
};
