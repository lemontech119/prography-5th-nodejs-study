const RentalService = require('../services/RentalService');

const createRental = (req, res)=>{
    const rentalService = new RentalService();
    const rental = rentalService.create(req.body.id, req.body.userId, req.body.bookId);

    res.send({
        data: rental.toJSON()
    })
}

module.exports = {
    createRental
}