const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

console.log("이거 나오나?");

router.get('', UserController.getUsers)
router.get('/:user', UserController.getUser)
router.post('', UserController.createUser)
//router.put('/:user', UserController.updateUser)
//router.delete('/:user', UserController.deleteUser)

module.exports = router;