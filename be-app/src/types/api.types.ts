import { Response, Router } from 'express';

export type ApiRouter = {
  router: Router;
  url: string;
};
