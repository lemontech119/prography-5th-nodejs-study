const BookRepository = require('../database/repositories/BookRepository');
const UserRepository = require('../database/repositories/UserRepository');
const RentalRepository = require('../database/repositories/RentalRepository');
const Book = require('../models/Book');
const User = require('../models/User');
const Rental = require('../models/Rental');


class RentalRepository {

    constructor(){
        this.bookRepository = new BookRepository();
        this.userRepository = new UserRepository();
        this.rentalRepository = new RentalRepository();
    }

    create(id, userId, bookId, date){
        const checkUser = User.fromData(this.userRepository.findById(userId));
        
    }
}

module.exports = RentalRepository;