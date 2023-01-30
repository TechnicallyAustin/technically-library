let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    console.log(this)
}

function addBookToLibrary(){
// set a variable to either the form or specific form inputs
// capture the information from the form
// create a book object with a book prototype
// add that book object the the library array

// update the Dom with the book object and required features


}


let test = Object.create(Book.prototype)


