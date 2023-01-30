let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return this.author
}

Book.prototype.id = function() {
 return myLibrary.findIndex((element) => element.title === this.title)
};



// need to set up form validaitons
// check to see a better way of storing book objects with titles
//  add a button to remove books from the library
// either create books on form submission or direectly from thee library
function formHandling(){
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
        let book = formInput.title
        book  = Object.create(new Book(formInput.title, formInput.author, formInput.pages, formInput.read));
        
        // adds the book to the myLibrary array
        myLibrary.push(book)
        console.log(book.id())
        // calls for the creation of a new library object
        newLibraryBook(book.title, book.author, book.pages, book.read)
    };
    
    function newLibraryBook(title, author, pages, read){
        console.log(title)
        const booksContainer = document.querySelector(".books")

        console.log(test)
        let book = booksContainer.appendChild(document.createElement("div"));
        book.setAttribute("class", `${book} book`);


        function bookTitle(){
            const bookTitle = book.appendChild(document.createElement("h3"));
            bookTitle.setAttribute("class", "new-book-title")
            bookTitle.textContent = `${title}`
        }; bookTitle()

        function bookAuthor(){
            const bookauthor = book.appendChild(document.createElement("p"));
            bookauthor.setAttribute("class", "new-book-author");
            bookauthor.textContent = `${author}`;
        }; bookAuthor()

        function bookPages(){
            const bookPages = book.appendChild(document.createElement("p"));
            bookPages.setAttribute("class", "new-book-pages");
            bookPages.textContent = `${pages} pages`;
        }; bookPages()
        function bookRead(){
            const bookRead = book.appendChild(document.createElement("p"));
            bookRead.setAttribute("class", "new-book-read");
            bookRead.textContent = `${read}`;
        }; bookRead()

        console.log(myLibrary)
    }; 

    function submitEvent(){
        const submit = document.getElementById("add-book");
        submit.addEventListener("click", () => {
            console.log("clicked");
            bookData()
        });
      }; submitEvent()

}; formHandling()

let test = Object.create(new Book("Test", "Austin", 45, "true"));
myLibrary.push(test)
console.log(test.id())



