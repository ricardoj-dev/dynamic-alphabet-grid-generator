import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = [process.env.WEB_CLIENT!];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const appCors = cors(options);

export default appCors;
