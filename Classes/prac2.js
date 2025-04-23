class LibraryItem{
    constructor(title,id,isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkOut(){
        if(this.isAvailable){
            this.isAvailable = false;
        }else{
            console.log(`${this.title} is already checked out.`)
        }
    }

    returnItem(){
        if(!this.isAvailable){
            this.isAvailable = true;
        }else{
            console.log(`${this.title} is not checked out.`)
        }
    }
}

class Book extends LibraryItem{
    constructor(author, genre, title, id, isAvailable){
        super(title,id,isAvailable);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem{
    constructor(director, duration, title, id, isAvailable){
        super(title,id,isAvailable);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem{
    constructor(issueNumber, publisher, title, id, isAvailable){
        super(title,id,isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
        
}

let book = new Book("The Great Gatsby", 1, "F. ScottFitzgerald", "Fiction");
let dvd = new DVD("Inception", 2, "Christopher Nolan", 148);
let magazine = new Magazine("National Geographic", 3, 120,"NatGeo Society");

book.checkOut();
book.returnItem();
    