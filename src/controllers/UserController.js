const UserService = require('../services/UserService');

const createUser = (req, res) =>{
    const userService = new UserService();
    const user = userService.create(req.body.id, req.body.name, req.body.password);
    res.send({
        data: user.toJSON()
    })
}

const getUsers = (req, res) =>{
    const userService = new UserService();
    const users = userService.find();
    res.send({
        data: users
    })
}

const getUser = (req, res) =>{
    const userService = new UserService();
    const user = userService.findById(req.params.user);
    res.send({
        data: user
    })
}

module.exports = {
    getUser,
    getUsers,
    createUser
}