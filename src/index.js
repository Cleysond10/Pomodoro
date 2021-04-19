const { request } = require('express');
const express = require('express');

const app = express();

app.get('/', (resquest, response) => {
  response.status(404).send("Hello World!")
});

app.listen('3333', () => {
  console.log(`Rodando ...`);
});