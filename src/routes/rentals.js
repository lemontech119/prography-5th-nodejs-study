const { Router } = require('express');
const RentalController = require('../controllers/RentalController');

const router = Router();

console.log("이거 나올까?");

router.post('', RentalController.createRental)
router.get('', RentalController.getRentals)

module.exports = router;