export type Payment = {
  id: string;
  name: string;
  ammount: number;
  code: string;
  grid: string[][];
};

const paymentsList: Payment[] = [];

export function addPayment(newPayment: Payment): boolean {
  if (!paymentsList.find((payment) => payment.id === newPayment.id)) {
    paymentsList.push(newPayment);
    return true;
  }

  return false;
}

export function getPayments(): Payment[] {
  return paymentsList;
}
