const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController');

/*Get Home page */
router.get('/', cardController.index_get);
//Submit a card
router.post('/', cardController.index_post);

module.exports = router;