import { Router } from 'express';
import { generateCode } from '@/utils/grid-utils';

const generateCodeRoute = Router();

generateCodeRoute.get('/generate-code', (req, res) => {
  res.json({ newCode: generateCode() });
});

export default generateCodeRoute;
