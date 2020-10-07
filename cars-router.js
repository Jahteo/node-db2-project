const express = require('express');

const db = require('./database/connection.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json({ data: cars})
    })
    .catch(error => {
      res.status(500).json({ error: error.message})
    })
})

router.get('/:id', (req, res) => {
  db('cars').where('id', '=', req.params.id)
    .then(cars => {
      res.status(200).json({ data: cars})
    })
    .catch(error => {
      res.status(500).json({ error: error.message})
    })
})

router.post('/', (req, res) => {
  const postData = req.body;
  (!Number.isInteger(postData.VIN) || !postData.Make || !postData.Model || !Number.isInteger(postData.Mileage))
  ? res.status(500).json({ error: "Please include a VIN, Make, Model, & Mileage"})
  : db('cars').insert(postData, 'id')
    .then(ids => {
      res.status(201).json({ data: ids })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.put('/:id', (req, res) => {
  const changes = req.body;
  (!Number.isInteger(changes.VIN) || !changes.Make || !changes.Model || !Number.isInteger(changes.Mileage))
  ? res.status(500).json({ error: "Please include a VIN, Make, Model, & Mileage"})
  : db('cars').where({ id: req.params.id }).update(changes)
    .then(ids => {
      res.status(201).json({ data: ids })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
});

router.delete('/:id', (req, res) => {
  db('cars').where({ id: req.params.id }).delete()
    .then(numChanged => {
      res.status(200).json({ data: numChanged })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
});

module.exports = router;