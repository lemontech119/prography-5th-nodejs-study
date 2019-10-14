const BookService = require('../services/BookService');

const createBook = (req, res) =>{
    const bookService = new BookService();
    const book = bookService.create(req.body.id, req.body.title, req.body.author);
    res.send({
        data: book.toJSON()
    })
}

const getBooks = (req, res) =>{
    const bookService = new BookService();
    const books = bookService.find();
    res.send({
        data: books
    })
}

const getBook = (req, res) =>{
    const bookService = new BookService();
    const book = bookService.find();
    res.send({
        data: book
    })
}

const updateBook = (req, res)=>{
    const bookService = new BookService();
    const payload = {
        title: req.body.title,
        author: req.body.author
    }
    const book = bookService.update(req.params.book, payload);
    res.send({
        data: book
    })
}

const deleteBook = (req, res)=>{
    const bookService = new BookService();
    bookService.delete(req.params.book);
    res.send({
        data: "success"
    })
}

module.exports = {
    getBook,
    getBooks,
    createBook,
    updateBook,
    deleteBook
}
