import { Router } from 'express';
import { addPayment, Payment } from '@/utils/payment-utils';
import { getMatrix, getCode } from '@/utils/grid-utils';
import { v4 as uuidv4 } from 'uuid';

const addPaymentRoute = Router();

addPaymentRoute.post('/payments', (req, res) => {
  const { name, ammount } = req.body;

  const newPayment: Payment = {
    id: uuidv4(),
    name: name,
    ammount: ammount,
    grid: getMatrix(),
    code: getCode()
  };

  if (addPayment(newPayment)) {
    res.status(201);
    return res.json({ status: 'added', message: 'Payment added succefully' });
  }

  res.status(409);
  return res.json({ message: 'Failed in adding the payment' });
});

export default addPaymentRoute;
