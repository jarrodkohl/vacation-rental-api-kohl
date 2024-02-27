import express from 'express';
import router from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);



export default app;

