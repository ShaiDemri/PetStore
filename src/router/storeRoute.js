const express = require('express');
const storeController = require('../controller/storeController');

const router = express.Router();

//Returns pet inventories by status
router.get('/inventory');
//Find purchase order by ID
router.get('/order/:orderId');
//Place an order for a pet
router.post('/order');
//Delete purchase order by ID
router.delete('/order/:orderId');

module.exports = router;