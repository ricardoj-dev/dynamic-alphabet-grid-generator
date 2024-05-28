import { Router } from 'express';
import { generateRandomMatrix, generateMatrixWithBias } from '@/utils/grid-utils';

const generateMatrixRoute = Router();

generateMatrixRoute.get('/generate-matrix', (req, res) => {
  const { bias } = req.query;

  console.log(bias);

  if (bias && /^[a-z]$/.test(bias.toString())) {
    return res.json({ newCharacters: generateMatrixWithBias(bias.toString()) });
  }

  return res.json({ newCharacters: generateRandomMatrix() });
});

export default generateMatrixRoute;
