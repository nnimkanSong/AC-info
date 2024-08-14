const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

const client = new Client({
  user: 'postgres',
  host: 'huseeinmac',
  database: 'ceweb',
  password: '123456',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
