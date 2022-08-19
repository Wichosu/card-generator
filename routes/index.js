const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController');

/*Get Home page */
router('/', cardController.index);