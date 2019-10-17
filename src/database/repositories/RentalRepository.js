const BaseRepository = require('./BaseRepository')

class RentalRepository extends BaseRepository {
    constructor(){
        super('rentals');
    }
}

module.exports = RentalRepository;