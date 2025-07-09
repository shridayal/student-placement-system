import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'Student Placement API is running!',
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Student Placement System API');
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Start server with database connection
const startServer = async () => {
  try {
    await connectDatabase();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
