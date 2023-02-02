// mac mini edit
myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {};
Book.prototype.id = function () {};

const createLibraryForm = {
  // add fieldsets for each input
  form: null,

  createForm: function () {
    const formContainer = document.body.appendChild(
      document.createElement("div")
    );
    formContainer.setAttribute("class", "book-form");

    this.form = formContainer.appendChild(document.createElement("form"));
    this.form.setAttribute("class", "new-book");
  },

  prevent: function () {
    this.form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  },
  legend: function () {
    const legend = this.form.appendChild(document.createElement("legend"));
    legend.setAttribute("class", "form-legend");
    legend.textContent = "Add a new book here!";
  },
  title: function () {
    const field = this.form.appendChild(document.createElement("fieldset"));
    field.setAttribute("class", "title-input form-input");

    let titleLabel = field.appendChild(document.createElement("label"));
    titleLabel.setAttribute("for", "book-title");
    titleLabel.textContent = "Title";

    const title = field.appendChild(document.createElement("input"));
    title.setAttribute("id", "book-title");
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Hunger Games");
  },
  author: function () {
    const field = this.form.appendChild(document.createElement("fieldset"));
    field.setAttribute("class", "author-input form-input");

    let authorLabel = field.appendChild(document.createElement("label"));
    authorLabel.setAttribute("for", "book-author");
    authorLabel.textContent = "Author";

    const author = field.appendChild(document.createElement("input"));
    author.setAttribute("id", "book-author");
    author.setAttribute("type", "text");
    author.setAttribute("placeholder", "Susan Collins");
  },
  pages: function () {
    const field = this.form.appendChild(document.createElement("fieldset"));
    field.setAttribute("class", "pages-input form-input");

    let pagesLabel = field.appendChild(document.createElement("label"));
    pagesLabel.setAttribute("for", "book-pages");
    pagesLabel.textContent = "# of Pages";

    const pages = field.appendChild(document.createElement("input"));
    pages.setAttribute("id", "book-pages");
    pages.setAttribute("type", "number");
    pages.setAttribute("placeholder", "395");
  },
  read: function () {
    const field = this.form.appendChild(document.createElement("fieldset"));
    field.setAttribute("class", "read-input form-input");
    let readLabel = field.appendChild(document.createElement("label"));
    readLabel.setAttribute("for", "book-read");
    readLabel.textContent = "Read?";

    const read = field.appendChild(document.createElement("input"));
    read.setAttribute("id", "book-read");
    read.setAttribute("type", "checkbox");
    read.setAttribute("value", "read");
  },
  submit: function () {
    const field = this.form.appendChild(document.createElement("fieldset"));
    field.setAttribute("class", "submit-input form-input");

    submitLabel = field.appendChild(document.createElement("label"));
    submitLabel.setAttribute("for", "add-book");
    const submit = field.appendChild(document.createElement("input"));
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Add Book");
    submit.setAttribute("id", "add-book");
  },
}; // this is run on button click event

const formBuilder = {
  // should change the text of the button clicked
  form: document.querySelector(".new-book"),
  button: document.getElementById("new-book-button"),

  build: function () {
    createLibraryForm.createForm();
    createLibraryForm.legend();
    createLibraryForm.title();
    createLibraryForm.author();
    createLibraryForm.pages();
    createLibraryForm.read();
    createLibraryForm.submit();
    createLibraryForm.prevent();
  },

  buttonEvent: function () {
    const button = document.getElementById("new-book-button");
    button.setAttribute("value", "Looks interesting!");
    button.removeEventListener("click", formBuilder);
  },

  submitEvent: function () {
    const form = document.querySelector(".new-book");
    const submit = document.getElementById("add-book");

    submit.addEventListener("click", () => {
      const formInputs = {
        title: document.getElementById("book-title"),
        author: document.getElementById("book-author"),
        pages: document.getElementById("book-pages"),
        read: document.getElementById("book-read"),
      };
      // when submitted, it takes the inputs on the form and passes them into books by form
      bookByForm(
        formInputs.title.value,
        formInputs.author.value,
        formInputs.pages.value,
        formInputs.read.value
      );

      function removeForm() {
        const formContainer = document.querySelector(".book-form");
        const button = document.getElementById("new-book-button");
        button.setAttribute("value", "Add a Book");
        document.body.removeChild(formContainer);
      }
      removeForm();
    });
  },
}; // creates a form if one doesnt exist. otherwise removes the button event


const formEvents = {
  logic: function() {
    formBuilder.build();
    formBuilder.buttonEvent();
    formBuilder.submitEvent();
  },
  createFormEvent: function () {
    const button = document.getElementById("new-book-button");
    button.addEventListener("click", formEvents.logic);
  }, // creates an event listener that will build the form
};
formEvents.createFormEvent();

function bookByForm(title, author, pages, read) {
  console.log(title, author, pages, read);
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log("my Library", myLibrary, "new Book", newBook)
  createBook(newBook)

} // called from the submit event

function createBook(Book) {
console.log("book created")
const books = document.querySelector(".books")

const card = books.appendChild(document.createElement("div"))
card.setAttribute("class", "book")

const bookInfo = {
  title: function(){
    const bookTitle = card.appendChild(document.createElement("h4"));
    bookTitle.setAttribute("class", "new-book-title")
  },
  author: function(){
    const bookAuthor = card.appendChild(document.createElement("div"))
    bookAuthor.setAttribute("class", "new-book-author")
  },
  pages: function(){
    const bookPages = card.appendChild(document.createElement("div"))
    bookPages.setAttribute("class", "new-book-pages")
  },
  read: function(){
    const bookRead = card.appendChild(document.createElement("div"))
    bookRead.setAttribute("class", "new-book-red")
  }

}



}
