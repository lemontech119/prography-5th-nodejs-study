const BookRepository = require('../database/repositories/BookRepository');
const UserRepository = require('../database/repositories/UserRepository');
const RentalRepository = require('../database/repositories/RentalRepository');
const Book = require('../models/Book');
const User = require('../models/User');
const Rental = require('../models/Rental');


class RentalService {

    constructor(){
        this.bookRepository = new BookRepository();
        this.userRepository = new UserRepository();
        this.rentalRepository = new RentalRepository();
    }

    create(id, userId, bookId){
        const checkUser = User.fromData(this.userRepository.findById(userId));
        const checkBook = Book.fromData(this.bookRepository.findById(bookId));

        if(checkBook == "No Book"){
            return "noBook"
        }
        if(checkBook.rentalYn == "Y"){
            return "rentBook"
        }
        
        checkBook.rentalYn = "Y";
        checkBook.date = checkBook.date;
        this.bookRepository.update(checkBook.id, checkBook.toJSON());

        const rental = Rental.newInstance(id, userId, bookId);
        this.rentalRepository.create(rental.toJSON());
        return rental;
    }

    find(){
        const rentalData = this.rentalRepository.find();
        return rentalData.map((rentalData) => Rental.fromData(rentalData));
    }
}

module.exports = RentalService;