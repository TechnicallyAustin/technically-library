// Library Object
const library = {
  books: [],
  addBook: function (book) {
    this.books.push(book);
    return this.books;
  },
  removeBook: function (book) {
    console.log("Books pre", this.books);
    this.books.splice(this.books.indexOf(book), 1);
    console.log("Books", this.books);
    return this.books;
  },
};

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function () {};
Book.prototype.id = function(){
    //this.id = library.books.indexOf(this)
    console.log(this.id)
};

function bookOperations() {
  const formInputs = {
    title: document.querySelector("#book-title").value,
    author: document.querySelector("#book-author").value,
    pages: document.querySelector("#book-pages").value,
    read: function () {
      const read = document.querySelector("#book-read").value;
      if (document.querySelector("#book-read").checked) {
        let readStatus = "Read";
        return readStatus;
      } else {
        let readStatus = "Unread";
        return readStatus;
      }
    },
  };

  function addtoLibrary(book) {
    library.books.push(book);
    console.log(library.books);
  }

  function createBook() {
    const book = new Book(
      formInputs.title,
      formInputs.author,
      formInputs.pages,
      formInputs.read
    );
    addtoLibrary(book);
  }
  createBook();
}

// Card Data
function cardOperations() {
  function createCards() {
      const shelf = document.querySelector(".shelf");
      shelf.innerHTML = "";
      const cards = {
        card: null,
        newCard: function () {
          const section = document.querySelector(".shelf");
          const newCard = section.appendChild(
            document.createElement("article")
          );
          newCard.setAttribute(
            "class",
            `card ${book.title} align-self-center w-25 h-50`
          );
          this.card = newCard;
        },
        header: function () {
          const header = this.card.appendChild(document.createElement("div"));
          header.setAttribute("class", "card-header bg-warning text-black");
          header.textContent = book.title;
        },
        body: function () {
          const body = this.card.appendChild(document.createElement("div"));
          body.setAttribute("class", "card-body");
          this.body = body;
        },
        title: function () {
          const title = this.body.appendChild(document.createElement("h5"));
          title.setAttribute("class", "card-title");
          title.textContent = book.title;
        },
        text: function () {
          const text = this.body.appendChild(document.createElement("p"));
          text.setAttribute("class", "card-text");
          text.textContent = book.author;
        },
        pages: function () {
          const pages = this.body.appendChild(document.createElement("p"));
          pages.setAttribute("class", "card-pages");
          pages.textContent = `# of Pages ${book.pages}`;
        },
        read: function () {
          const read = this.body.appendChild(document.createElement("p"));
          read.setAttribute("class", "card-read");
          read.textContent = book.read();
        },
        footer: function () {
          const footer = this.card.appendChild(document.createElement("div"));
          footer.setAttribute(
            "class",
            "card-footer d-flex justify-content-space align-content-center bg-warning text-white"
          );
          this.footer = footer;
        },
        remove: function () {
          const remove = this.footer.appendChild(
            document.createElement("button")
          );
          remove.setAttribute("id", "remove-book");
          remove.setAttribute("value", "Remove");
          remove.setAttribute("class", "remove-button w-50 btn-danger");
          remove.textContent = "Del";
          remove.addEventListener("click", () => {
            library.removeBook(this); // removes book
            shelf.removeChild(this.card); // removes card
          });
        },
        status: function () {
          const toggle = this.footer.appendChild(
            document.createElement("button")
          );
          toggle.setAttribute("class", "read-toggle w-50 btn-success");
          toggle.setAttribute("id", "read-toggle");
          toggle.setAttribute("value", "Read");
          toggle.textContent = "Read";

          //let cardStatus = document.querySelector(".card-read"); // this needs to reference this.read()
          toggle.addEventListener("click", () => {
            if (this.read.textContent === "Unread") {
              this.read.textContent = "Read";
            } else {
              this.read.textContent = "Unread";
            }
          });
        },
        create: function () {
          this.newCard();
          this.header();
          this.body();
          this.title();
          this.text();
          this.pages();
          this.read();
          this.footer();
          this.remove();
          this.status();
        },
      };
      for (let i = 0; i < library.books.length; i++) {
          let book = library.books[i];
      if (!library.books.includes(library.books[i].title)) {
        cards.create();
      } else {
        console.log("exists");
      }
    }
  }
  createCards();
}

// Form Data
function formOperations() {
  const newButton = document.querySelector(".new-book-btn");

  // Form Object
  const formObj = {
    form: null,
    newForm: function () {
      const container = document.querySelector(".new-book-container");
      const newForm = container.appendChild(document.createElement("form"));
      newForm.setAttribute("class", "book-form h-75 d-flex flex-column justify-content-around align-items-around");
      this.form = newForm;
    },
    prevent: function () {
      this.form.addEventListener("submit", function (event) {
        event.preventDefault();
        bookOperations();
        cardOperations();
        this.reset();
      });
    },
    legend: function () {
      const legend = this.form.appendChild(document.createElement("legend"));
      legend.setAttribute("class", "legend text-center pb-0");
      legend.textContent = "Read anything fun Lately?";
    },
    inputs: function () {
      const form = this.form;
      const inputs = ["Title", "Author", "Pages", "Read"];
      for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].toLowerCase();
        let labelValue = inputs[i]

        const formFields = {
          fieldset: null,
          newField: function () {
            let field = form.appendChild(document.createElement("fieldset"));
            field.setAttribute("class", `${value}-field d-flex align-items-center justify-content-between`);
            if (value === "read"){
                 field.setAttribute("class", `${value}-field d-flex align-items-center justify-content-between w-50`);
            }
            this.fieldset = field;
          },
          label: function () {
            if (value === "pages") {
              label = this.fieldset.appendChild(
                document.createElement("label")
              );
              label.setAttribute("for", `book-${value}`);
              label.setAttribute("class", "form-label mb-0 align-items-start");
              label.textContent = "Pages";
            } else {
              let label = this.fieldset.appendChild(
                document.createElement("label")
              );
              label.setAttribute("for", `book-${value}`);
              label.setAttribute(
                "class",
                "form-label align-items-start mb-0"
              );
              label.textContent = labelValue;
            }
          },
          inputs: function () {
            let input = this.fieldset.appendChild(
              document.createElement("input")
            );

            if (value === "read") {
              input.setAttribute("type", "checkbox");
              input.setAttribute("class", "form-inputs align-self-center mt-0 w-25 h-25");
              input.setAttribute("id", `book-${value}`);
            } else if (value === "pages") {
              input.setAttribute("type", "number");
              input.setAttribute("placeholder", "395");
              input.setAttribute("id", `book-${value}`);
              input.setAttribute("class", "form-inputs w-75 ms-6");
              input.setAttribute("required", "");
            } else {
              input.setAttribute("type", "text");
              input.setAttribute("id", `book-${value}`);
              input.setAttribute("class", "form-inputs w-75 ms-6");
              input.setAttribute("placeholder", `${value}`);
              input.setAttribute("required", "");
            }
          },
        };
        formFields.newField();
        formFields.label();
        formFields.inputs();
      }
    },
    submit: function () {
      const submit = this.form.appendChild(document.createElement("button"));
      submit.setAttribute("id", "submit-book");
      submit.setAttribute("class", "submit-book btn-secondary");
      submit.setAttribute("value", "Add Book");
      submit.textContent = "Add Book";
    },
    create: function () {
      if (this.form === null) {
        this.newForm();
        this.prevent();
        this.legend();
        this.inputs();
        this.submit();
      } else {
        console.log("Form exists");
      }
    },
  };
  newButton.addEventListener("click", () => {
    console.log("click");
    formObj.create();
  });
}
formOperations();
