import express, { type Request, Response, NextFunction } from 'express';
import { registerRoutes } from '../server/routes';
import { serveStatic } from '../server/vite';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all routes
registerRoutes(app);

// In production, serve the static files
if (process.env.NODE_ENV === 'production') {
  serveStatic(app);
}

// Export handler for Vercel serverless function
export default app;