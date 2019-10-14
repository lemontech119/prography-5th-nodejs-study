const UserRepository = require('../database/repositories/UserRepository');
const User = require('../models/User');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    create(id, name, password) {
        const user = User.newInstance(id, name, password);
        this.userRepository.create(user.toJSON());
        return user;
    }

    find() {
        const usersData = this.userRepository.find();
        return usersData.map((userData) => User.fromData(userData));
    }

    findById(id) {
        const user = User.fromData(this.userRepository.findById(id));
        return user;
    }

    update(id, data) {
        const user = User.fromData(this.UserRepository.findById(id));
        user.name = data.name || user.name;
        user.password = data.password || todo.password;
        user.role = data.role || todo.role;
        this.userRepository.update(id, todo.toJSON());
        return user;
    }

    delete(id) {
        console.log(this.userRepository.delete(id));
    }
}

module.exports = UserService;