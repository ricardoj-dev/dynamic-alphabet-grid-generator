import { Router } from 'express';

import { ApiRouter } from '@/types/api.types';
import generateCodeRoute from './generate-code';
import generateMatrixRoute from './generate-matrix';
import addPaymentRoute from './add-payment';
import getPaymentsRoute from './get-payments';

const router = Router();

// - Exercise 1 Routes
router.use(generateCodeRoute);
router.use(generateMatrixRoute);
router.use(addPaymentRoute);
router.use(getPaymentsRoute);

const exerciseRoutes: ApiRouter = {
  router: router,
  url: '/api/exercise'
};

export default exerciseRoutes;
