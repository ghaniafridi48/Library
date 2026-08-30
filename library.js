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
    shelf.textContent = '';
   
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


        const delete_book = document.createElement('button');
        delete_book.textContent = 'Delete Book';
        delete_book.setAttribute('data-id', book.id);
        card.appendChild(delete_book);

        delete_book.addEventListener("click",() =>{
            const deleteIndex = myLibrary.findIndex(obj => obj.id === delete_book.getAttribute('data-id'));

            myLibrary.splice(deleteIndex,1);
            displayAllBooks(myLibrary);




        })

    });
}

const form = document.querySelector('form');
form.addEventListener('submit' , (event) => {
        event.preventDefault();

        const titleValue= document.getElementById('title').value;
        const authorValue = document.getElementById('author').value;
        const pagesValue = document.getElementById('pages').value;
        const readstatusValue = document.getElementById('read-status').value;

        const newBook = new Book(titleValue,authorValue,pagesValue,readstatusValue);

        addBookToLibrary(newBook);

        displayAllBooks(myLibrary);

        form.reset();
        document.getElementById('my-dialog').close();
    }
)

let b = new Book("book1","me",10,"not read");
addBookToLibrary(b);
let c = new Book("book2","me",10,"not read");
addBookToLibrary(c);
let d = new Book("book3","me",10,"not read");
addBookToLibrary(d);

displayAllBooks(myLibrary);
