const BaseRepository = require('./BaseRepository')

class RentalRepository extends BaseRepository {
    constructor(){
        super('Rentals');
    }
}

module.exports = RentalRepository;