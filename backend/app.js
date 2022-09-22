import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './src/routes/user';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', userRoutes);
    this.app.use('/login', userRoutes);
  }
}

export default new App().app;
