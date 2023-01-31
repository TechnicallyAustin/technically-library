let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return this.author;
};

Book.prototype.id = function () {};

// need to set up form validaitons
// check to see a better way of storing book objects with titles
//  add a button to remove books from the library
// either create books on form submission or direectly from thee library
z;

function newBookEvent() {
  function newBook() {
    const formContainer = document.body.appendChild(
      document.createElement("div")
    );
    formContainer.setAttribute("class", "book-form");

    // create a div that holds a button and the title
    // the button creates the form.
    function formTitle() {
      const formTitle = formContainer.appendChild(document.createElement("h3"));
      formTitle.setAttribute("class", "form-title");
      formTitle.textContent = "Read anything lately?";
    }
    formTitle();

    function bookForm() {
      const form = formContainer.appendChild(document.createElement("form"));
      form.setAttribute("class", "new-book-form");
      //form.setAttribute("onsubmit","bookData()");
      form.setAttribute("method", "");

      function legend() {
        const legend = form.appendChild(document.createElement("legend")); // Form heading info
        legend.setAttribute("class", "form-legend");
        legend.textContent = "Add a new book here!";
      }
      legend();

      function titleInput() {
        const field = form.appendChild(document.createElement("fieldset"));
        field.setAttribute("class", "title-input form-input");

        let titleLabel = field.appendChild(document.createElement("label"));
        titleLabel.setAttribute("for", "book-title");
        titleLabel.textContent = "Title";

        const title = field.appendChild(document.createElement("input"));
        title.setAttribute("id", "book-title");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Hunger Games");
      }
      titleInput();

      function authorInput() {
        const field = form.appendChild(document.createElement("fieldset"));
        field.setAttribute("class", "author-input form-input");

        let authorLabel = field.appendChild(document.createElement("label"));
        authorLabel.setAttribute("for", "book-author");
        authorLabel.textContent = "Author";

        const author = field.appendChild(document.createElement("input"));
        author.setAttribute("id", "book-author");
        author.setAttribute("type", "text");
        author.setAttribute("placeholder", "Susan Collins");
      }
      authorInput();

      function pagesInput() {
        const field = form.appendChild(document.createElement("fieldset"));
        field.setAttribute("class", "pages-input form-input");

        let pagesLabel = field.appendChild(document.createElement("label"));
        pagesLabel.setAttribute("for", "book-pages");
        pagesLabel.textContent = "# of Pages";

        const pages = field.appendChild(document.createElement("input"));
        pages.setAttribute("id", "book-pages");
        pages.setAttribute("type", "number");
        pages.setAttribute("placeholder", "395");
      }
      pagesInput();

      function readInput() {
        const field = form.appendChild(document.createElement("fieldset"));
        field.setAttribute("class", "read-input form-input");
        let readLabel = field.appendChild(document.createElement("label"));
        readLabel.setAttribute("for", "book-read");
        readLabel.textContent = "Read?";

        const read = field.appendChild(document.createElement("input"));
        read.setAttribute("id", "book-read");
        read.setAttribute("type", "checkbox");
        read.setAttribute("value", "read");
      }
      readInput();

      function submit() {
        const field = form.appendChild(document.createElement("fieldset"));
        field.setAttribute("class", "submit-input form-input");

        submitLabel = field.appendChild(document.createElement("label"));
        submitLabel.setAttribute("for", "add-book");
        const submit = field.appendChild(document.createElement("input"));
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Add Book");
        submit.setAttribute("id", "add-book");
      }
      submit();
    }
    bookForm();
  }


  function formHandling() {
    function formEvent() {
      const form = document.querySelector(".new-book");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }
    formEvent();

    function bookData() {
      // takes form data and assigns it to variables
      const formInput = {
        title: document.querySelector("#book-title").value,
        author: document.querySelector("#book-author").value,
        pages: document.querySelector("#book-pages").value,
        read: document.querySelector("#book-read").value,
      };
      formInput;

      // creates a book object using the form data
      let book = formInput.title;
      book = Object.create(
        new Book(
          formInput.title,
          formInput.author,
          formInput.pages,
          formInput.read
        )
      );

      // adds the book to the myLibrary array
      myLibrary.push(book);
      // calls for the creation of a new library object
      newLibraryBook(book.title, book.author, book.pages, book.read, book.id());
    }

    function newLibraryBook(title, author, pages, read, id) {
      console.log(title, id);
      const booksContainer = document.querySelector(".books");

      console.log(test);
      let book = booksContainer.appendChild(document.createElement("div"));
      book.setAttribute("class", `${title} ${id} book`);

      function bookTitle() {
        const bookTitle = book.appendChild(document.createElement("h3"));
        bookTitle.setAttribute("class", "new-book-title");
        bookTitle.textContent = `${title}`;
      }
      bookTitle();

      function bookAuthor() {
        const bookauthor = book.appendChild(document.createElement("p"));
        bookauthor.setAttribute("class", "new-book-author");
        bookauthor.textContent = `${author}`;
      }
      bookAuthor();

      function bookPages() {
        const bookPages = book.appendChild(document.createElement("p"));
        bookPages.setAttribute("class", "new-book-pages");
        bookPages.textContent = `${pages} pages`;
      }
      bookPages();
      function bookRead() {
        const bookRead = book.appendChild(document.createElement("p"));
        bookRead.setAttribute("class", "new-book-read");
        bookRead.textContent = `${read}`;
      }
      bookRead();

      console.log(myLibrary);
    }

    function submitEvent() {
      const submit = document.getElementById("add-book");
      submit.addEventListener("click", () => {
        console.log("clicked");
        bookData();
      });
    }
    submitEvent();
  }
  formHandling();

  function newBookForm() {
    const button = document.getElementById("new-book-button");
    button.addEventListener("click", newBook());
  }
  newBookForm();

}


let test = Object.create(new Book("Test", "Austin", 45, "true"));
myLibrary.push(test);
