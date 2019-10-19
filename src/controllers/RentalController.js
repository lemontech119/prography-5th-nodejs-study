const RentalService = require('../services/RentalService');

const createRental = (req, res)=>{
    const rentalService = new RentalService();
    const rental = rentalService.create(req.body.id, req.body.userId, req.body.bookId);
    let resData;
    if(rental == "noBook"){
        resData= "No Book"
    }else if(rental =="rentBook"){
        resData= "이미 대여된 도서입니다."
    }else{
        resData = rental.toJSON()
    }

    res.send({
        data: resData
    })
}

module.exports = {
    createRental
}