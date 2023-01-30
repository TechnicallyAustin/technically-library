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

function formEvent(){
    const form = document.querySelector(".new-book");
    form.addEventListener("submit", function(event){
        event.preventDefault()
    })
}; formEvent()





function bookData(){
    // takes form data and assigns it to variables
    const formInput = {
        title: document.querySelector("#book-title").value,
        author: document.querySelector("#book-author").value,
        pages: document.querySelector("#book-pages").value,
        read: document.querySelector("#book-read").value
    }; formInput

    // creates a book object using the form data
    let book = Object.create(new Book(formInput.title, formInput.author, formInput.pages, formInput.read));

    // adds the book to the myLibrary array
    myLibrary.push(book)
    console.log(book)
};

function submitEvent(){
    const submit = document.getElementById("add-book");
    submit.addEventListener("click", () => {
        console.log("clicked");
        bookData()
    })
  }; submitEvent()

let test = Object.create(new Book("Test", "Austin", 45, "true"));
//console.log(test)


