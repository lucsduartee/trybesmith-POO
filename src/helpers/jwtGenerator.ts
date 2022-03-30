import Jwt from 'jsonwebtoken';
import 'dotenv/config';
import ILogin from '../interfaces/Login.interface';

const jwtConfig = { expiresIn: '1d' };

const SECRET = process.env.JWT_SECRET || 'secret';

const token = (data: ILogin) => Jwt.sign(data, SECRET, jwtConfig);

export default token;
