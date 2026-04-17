import express, { type Router, type Request, type Response, type NextFunction } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('dynamo get')
});

router.post('/', (req: Request, res: Response) => {
  res.send('dynamo post')
});

router.put('/', (req: Request, res: Response) => {
  res.send('dynamo update')
});

router.delete('/', (req: Request, res: Response) => {
  res.send('dynamo delete')
});

export default router;