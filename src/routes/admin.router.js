const express = require('express');
const productsController = require('../controllers/productsController.js'); 
const ticketsController = require('../controllers/ticketsController.js');
const usersController = require('../controllers/usersController.js')
const { isAdmin } = require('../middleware/auth.js');

const router = express.Router();

router.get('/realtimeproducts', isAdmin, productsController.realTimeProducts);

router.get('/tickets', isAdmin, ticketsController.getTickets)

router.get('/premium', isAdmin , usersController.listUsers);

router.post('/premium/:uid', isAdmin, usersController.updateRollUser)

module.exports = router;
