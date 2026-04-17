import express, { type Router, type Request, type Response, type NextFunction } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('aurora get')
});

router.post('/', (req: Request, res: Response) => {
  res.send('aurora post')
});

router.put('/', (req: Request, res: Response) => {
  res.send('aurora update')
});

router.delete('/', (req: Request, res: Response) => {
  res.send('aurora delete')
});

export default router;