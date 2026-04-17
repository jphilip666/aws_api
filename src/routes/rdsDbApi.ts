import express, { type Router, type Request, type Response, type NextFunction } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('rds get')
});

router.post('/', (req: Request, res: Response) => {
  res.send('rds post')
});

router.put('/', (req: Request, res: Response) => {
  res.send('rds update')
});

router.delete('/', (req: Request, res: Response) => {
  res.send('rds delete')
});

export default router;