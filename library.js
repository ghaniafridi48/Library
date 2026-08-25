const Book = function(title, author, pages , read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `the ${this.title} by ${this.author} , ${pages} pages , ${this.read}`
    }

}

