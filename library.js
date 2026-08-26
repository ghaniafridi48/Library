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

function displayAllBooks(myLibrary) {
    const shelf = document.querySelector('.shelf');
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        shelf.appendChild(card);
        const title = document.createElement('h3');
        title.classList.add('title');
        card.appendChild(title);
        title.textContent = 'Title : ' + book.title;

    
    });
}

let b = new Book("book","me",10,"no");
console.log(b);
addBookToLibrary(b);

displayAllBooks(myLibrary);