import express, { type Router, type Request, type Response, type NextFunction } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('elasticache get')
});

router.post('/', (req: Request, res: Response) => {
  res.send('elasticache post')
});

router.put('/', (req: Request, res: Response) => {
  res.send('elasticache update')
});

router.delete('/', (req: Request, res: Response) => {
  res.send('elasticache delete')
});

export default router;