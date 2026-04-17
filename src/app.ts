import express, { type Application, type Request, type Response, type NextFunction } from 'express';
import auroraApiRoutes from './routes/auroraDbApi.js';
import dynamoDbApiRoutes from './routes/dynamoDbApi.js';
import elastiCacheApiRoutes from './routes/elastiCacheApi.js';
import rdsDbApiRoutes from './routes/rdsDbApi.js';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/aurora', auroraApiRoutes);
app.use('/api/dynamo', dynamoDbApiRoutes);
app.use('/api/redis', elastiCacheApiRoutes);
app.use('/api/rds', rdsDbApiRoutes);

// Health Check Route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

// Invalid Route
app.use((req, res) => {
  res.status(404).send("Not found");
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

export default app;