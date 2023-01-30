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




function bookData(){
    const formInput = {
        title: document.querySelector("#book-title").value,
        author: document.querySelector("#book-author").value,
        pages: document.querySelector("#book-pages").value,
        read: document.querySelector("#book-read").value
    }; formInput()

    let book = Object.create(new Book(title, author, pages, read));
    console.log(book)

}

let test = Object.create(new Book("Test", "Austin", 45, "true"));
//console.log(test)


