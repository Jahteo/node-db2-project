const express = require('express');
const helmet = require('helmet');

const carsRouter = require('./cars-router');
// const db = require('./database/connection.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ hello: "stranger. Fancy meeting you here." })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("API is for landing!!!"))