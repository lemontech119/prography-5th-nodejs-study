class Book {
    constructor(id, title, author, rentalYn, date){
        this.id = id;
        this.title = title;
        this.author = author;
        this.rentalYn = rentalYn;
        this.date = date;
    }

    static newInstance(id, title, author, rentalYn){
        const date = `${Date.now()}`;
        return new Book(id, title, author, rentalYn, date);
    }

    toJSON(){
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            rentalYn: this.rentalYn,
            date: this.date
        }
    }

    static fromData(data){
        if(data == undefined){
            return "No Book"
        }
        return new Book(data.id, data.title, data.author, data.rentalYn, data.date);
    }
}

module.exports = Book;