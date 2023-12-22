import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3002;

app.listen(port, () =>
  console.log(`Listening on port ${port}`),
);
