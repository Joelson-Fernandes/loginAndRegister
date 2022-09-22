import { Router } from 'express';
import user from '../controllers/user';

const route = new Router();

route.post('/', user.store);
route.post('/login', user.login);

export default route;
