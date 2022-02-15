const express = require('express');
const router = express.Router();

const ctrlr = require('../controllers')

router.get('/', ctrlr.home.homeController);

module.exports = router