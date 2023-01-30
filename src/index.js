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
        book = Object.create(new Book(formInput.title, formInput.author, formInput.pages, formInput.read));

        // adds the book to the myLibrary array
        myLibrary.push(book)

        // calls for the creation of a new library object
        newLibraryBook(book.title, book.author, book.pages, book.read)
    };
    
    function newLibraryBook(title, author, pages, read){
        console.log(title)
        const booksContainer = document.querySelector(".books")

        let book = booksContainer.appendChild(document.createElement("div"));
        book.setAttribute("class", `${title} book`);

        function bookTitle(){
            const bookTitle = book.appendChild(document.createElement("h3"));
            bookTitle.setAttribute("class", "new-book-title")
            bookTitle.textContent = `${title}`
        }; bookTitle()

        function bookAuthor(){
            const bookauthor = book.appendChild(document.createElement("h3"));
            bookauthor.setAttribute("class", "new-book-author");
            bookauthor.textContent = `${author}`;
        }; bookAuthor()

        function bookPages(){
            const bookPages = book.appendChild(document.createElement("h3"));
            bookPages.setAttribute("class", "new-book-pages");
            bookPages.textContent = `${pages}`;
        }; bookPages()
        function bookRead(){
            const bookRead = book.appendChild(document.createElement("h3"));
            bookRead.setAttribute("class", "new-book-author");
            bookRead.textContent = `${read}`;
        }; bookRead()
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


console.log(myLibrary)



