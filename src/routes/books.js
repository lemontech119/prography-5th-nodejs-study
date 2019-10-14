const { Router } = require('express');
const BookController = require('../controllers/BookController');

const router = Router();

console.log("이거나오나2");

router.get('', BookController.getBooks);
router.get('/:book', BookController.getBook);
router.post('', BookController.createBook);
router.put('/:book', BookController.updateBook);
router.delete('/:book', BookController.deleteBook);

module.exports = router;