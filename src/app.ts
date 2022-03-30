import express from 'express';
import errorHandler from './middlewares/error.middleware';
import productsRoutes from './routes/Products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use(errorHandler);
export default app;
