class Book {
    constructor(id, title, author, date){
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
    }

    static newInstance(id, title, author){
        const date = `${Date.now()}`;
        return new Book(id, title, author, date);
    }

    toJSON(){
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            date: this.date
        }
    }

    static fromData(data){
        return new Book(data.id, data.title, data.author, data.date);
    }
}

module.exports = Book;