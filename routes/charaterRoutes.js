const express = require('express');
const router = express.Router();
const ctrlr = require('../controllers');

router.post('/add', ctrlr.home.addCharacterToDynamo);

module.exports = router