const { Router } = require('express');
const auth = require('../middlewares/auth')
const users = require('./users');
const books = require('./books');
const rentals = require('./rentals');


const router = Router();

// middleware
router.use(auth);
router.use('/users', users);
router.use('/books', books);
router.use('/rentals', rentals);

module.exports = router;