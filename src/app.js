import express from 'express';
import healthRoutes from './routes/healthRoutes.js';
import cacheHeaders from './middleware/cacheHeaders.js';

const app = express();


app.use(express.json());
app.use(cacheHeaders);
app.use(healthRoutes);

export default app;