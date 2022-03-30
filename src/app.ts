import express from 'express';
import errorHandler from './middlewares/error.middleware';
import loginRoutes from './routes/Login.routes';
import productsRoutes from './routes/Products.routes';
import usersRoutes from './routes/Users.routes';
import ordersRoutes from './routes/Orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/orders', ordersRoutes);

app.use(errorHandler);
export default app;
