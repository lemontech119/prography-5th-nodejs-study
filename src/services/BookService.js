const BookRepository = require('../database/repositories/BookRepository');
const Book = require('../models/Book');

class BookService{

    constructor(){
        this.bookRepository = new BookRepository();
    }

    create(id, title, author){
        const book = Book.newInstance(id, title, author);
        this.bookRepository.create(book.toJSON());
        return book;
    }

    find(){
        const booksData = this.bookRepository.find();
        return booksData.map((bookData)=> Book.fromData(bookData));
    }

    findById(id){
        const book = Book.fromData(this.bookRepository.findById(id));
        return book;
    }

    update(id, data){
        const book = Book.fromData(this.bookRepository.fingById(id));
        book.title = data.title || book.title;
        book.author = data.author || book.author;
        book.date = data.date || book.date;
        this.bookRepository.update(id, book.toJSON());
        return book;
    }

    delete(id){
        const book = this.bookRepository.delete(id);
        this.bookRepository.delete(id);

        console.log(this.bookRepository.delete(id));
        return book;
    }
}

module.exports = BookService;