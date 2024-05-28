import { Router } from 'express';
import { getPayments } from '@/utils/payment-utils';

const getPaymentsRoute = Router();

getPaymentsRoute.get('/payments', (req, res) => {
  res.json({ payments: getPayments() });
});

export default getPaymentsRoute;
