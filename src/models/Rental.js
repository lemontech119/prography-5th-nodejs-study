class Rental {
    constructor(id, userId, bookId, date){
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.date = date;
    }

    static newInstance(id, userId, bookId){
        const date = `${Date.now()}`;
        return new Rental(id, userId, bookId, date);
    }

    toJSON(){
        return{
            id: this.id,
            userId: this.userId,
            bookId: this.bookId,
            date: this.date
        }
    }

    static fromData(data){
        return new Rental(data.id, data.userId, data.bookId, data.date);
    }
}

module.exports = Rental;
