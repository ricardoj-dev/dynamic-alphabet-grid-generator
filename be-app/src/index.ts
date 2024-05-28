import express, { Express } from 'express';

import appCors from '@/src/libs/cors/app-cors';

import exerciseRoutes from '@/src/routes/api/exercise';

// - Express settings
const app: Express = express();
app.use(appCors);
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', true);

// - Register the Routes
app.use(exerciseRoutes.url, exerciseRoutes.router);

// Starting server
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
