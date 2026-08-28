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

        //main card for displaying details
        const card = document.createElement('div');
        card.classList.add('card');
        shelf.appendChild(card);
        //card title 
        const title = document.createElement('h3');
        title.classList.add('title');
        card.appendChild(title);
        title.textContent = 'Title : ' + book.title;
        //sepearte details wrapper for card details excluding title
        const details = document.createElement('div');
        details.classList.add('details');
        card.appendChild(details);

        //rest of details starts here
        //author
        const author = document.createElement('p');
        author.classList.add('author');
        details.appendChild(author);
        author.textContent = 'Author : ' + book.author;
        
        const pages = document.createElement('p');
        pages.classList.add('pages');
        details.appendChild(pages);
        pages.textContent = 'Pages : ' + book.pages;
        
        const read = document.createElement('p');
        read.classList.add('status');
        details.appendChild(read);
        read.textContent = 'Read Status: ' + book.read;


    });
}

let b = new Book("book","me",10,"no");
addBookToLibrary(b);
let c = new Book("book","me",10,"no");
addBookToLibrary(c);
let d = new Book("book","me",10,"no");
addBookToLibrary(d);

let e = new Book("book","me",10,"no");
addBookToLibrary(e);
displayAllBooks(myLibrary);