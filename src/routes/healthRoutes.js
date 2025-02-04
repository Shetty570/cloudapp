import express from 'express';
import { healthCheck } from '../controllers/healthController.js';

const router = express.Router();

router.get('/healthz', healthCheck);

export default router;