import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { port } from '../config';



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World'
  });
});

app.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});