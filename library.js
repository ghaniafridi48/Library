const myLibrary = [];


const Book = function(title, author, pages , read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function(){
        return `the ${this.title} by ${this.author} , ${pages} pages , ${this.read}`
    }

}

function addBookToLibrary(book){
    myLibrary.push(book);

}

let b = new Book("book","me",10,"no");
console.log(b);
addBookToLibrary(b);
console.log(myLibrary);
