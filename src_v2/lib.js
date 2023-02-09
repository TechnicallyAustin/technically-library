// handles book creation and Book logical operations
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype Methods
Book.prototype.info = function () {
  console.log(this.title);
};
Book.prototype.id = function () {};

// handles form logical operations
function form() {
  const button = document.querySelector(".form-button");

  function formOperations() {
    const formContainer = document.querySelector(".new-book-container");

    const formOptions = {
      form: null, // new form sets this.form = form
      newForm: function () {
        this.form = formContainer.appendChild(document.createElement("form"));
        this.form.setAttribute("class", "new-book-form");
      }, // creates the form element with class new-book
      prevent: function () {
        this.form.addEventListener("submit", function (event) {
          event.preventDefault();
        });
      }, // prevents the default submission for the form
      legend: function () {
        const legend = this.form.appendChild(document.createElement("legend"));
        legend.setAttribute("id", "form-legend");
        legend.setAttribute("class", "row");
        legend.textContent = "My latest page turner";
      }, // title of the new book form
      inputs: function () {
        const inputs = ["Title", "Author", "Pages", "Read"];

        for (let i = 0; i < inputs.length; i++) {
          let input = inputs[i];
          console.log(input);
          let value = input.toLowerCase();

          const fieldset = this.form.appendChild(
            document.createElement("fieldset")
          );
          fieldset.setAttribute(
            "class",
            `${value}-field row d-flex flex-column align-items-start justify-content-space ms-4 `
          );

          const label = fieldset.appendChild(document.createElement("label"));
          label.setAttribute("for", `book-${value}`);
          label.setAttribute("class", "form-label align-items-start mb-0 pt-2");
          label.textContent = input;

          input = fieldset.appendChild(document.createElement("input"));
          input.setAttribute("id", `book-${value}`);
          input.setAttribute("class", "form-inputs w-75 ms-6");
          input.setAttribute("placeholder", `${value}`);

          if (value == "pages") {
            input.setAttribute("type", "number");
            input.setAttribute("placeholder", "395");
          } else if (value == "read") {
            console.log("READ");
            input.setAttribute("type", "checkbox");
            input.setAttribute("class", "form-inputs  align-self-center mt-0");

            fieldset.setAttribute(
              "class",
              `${value}-field row d-flex  align-items-center justify-content-space p-2 `
            );
            label.setAttribute(
              "class",
              "form-label align-items-start mb-0 p-2"
            );
          } else {
            input.setAttribute("type", "text");
          }
        }
      },
      submit: function () {
        const fieldset = this.form.appendChild(
          document.createElement("fieldset")
        );
        fieldset.setAttribute(
          "class",
          "book-submit d-flex justify-content-center align-items-center"
        );

        const submit = fieldset.appendChild(document.createElement("button"));
        submit.setAttribute("class", "add-book");
        submit.textContent = "Add Book";

        submit.addEventListener("click", () => {
          bookOperations();
          console.log("form submitted");
        });
      }, // adds event listener that saves the information from form to create Book
      add: function () {
        const button = document.querySelector(".new-book-btn");
        button.addEventListener("click", function () {
          const form = document.querySelector("form");
          if (form === null) {
            console.log("clicked", form);
            formOptions.newForm();
            formOptions.prevent();
            formOptions.legend();
            formOptions.inputs();
            formOptions.submit();
          } else {
            console.log("Form Exists!");
          }
        });
      }, // adds an event listener to the button that will create the form
    };
    formOptions.add();
  }
  formOperations();
}
form();

// Book Logic
function bookOperations() {
  const library = document.querySelector(".library");
  const myLibrary = [];


  const formInputs = {
    title: function () {
      const title = document.querySelector("#book-title");
      return title.value;
    },
    author: function () {
      const author = document.querySelector("#book-author");
      return author.value;
    },
    pages: function () {
      const pages = document.querySelector("#book-pages");
      return pages.value;
    },
    read: function () {
      const read = document.querySelector("#book-read");
      return read.value;
    },
  };

  const options = {
    book: null,
    newBook: function () {
      const newBook = new Book(
        formInputs.title,
        formInputs.author,
        formInputs.pages,
        formInputs.read
      );
      this.book = newBook;
    }, // given Form input creates a Book Object
    save: function () {
      myLibrary.push(this.book);
    }, // after a Book has been created, adds to Library
    dom: function () {
      const shelf = document.querySelector(".shelf");

      for (let i = 0; i < myLibrary.length; i++) {

        let book = myLibrary[i];
        if (myLibrary !== []) {
          const cardOptions = {
            card: null,
            newCard: function(){
                const newCard = shelf.appendChild(document.createElement("article"));
                card.setAttribute("class",`card col-3 h-25 w-25 flex-shrink-1 ${book.title()} ${i}`);
                this.card =  newCardconst
            },
            header: function(){
                const cardHeader = card.appendChild(document.createElement("div"));
                cardHeader.setAttribute("class", `book-title card-header`);
                cardHeader.textContent = book.title();
            },
            body: function(){
                const cardBody = card.appendChild(document.createElement("div"));
                cardBody.setAttribute("class", "card-body");
            },
            title: function(){
                const cardTitle = cardBody.appendChild(document.createElement("h5"));
                cardTitle.setAttribute("class", "title card-title");
                cardTitle.textContent = book.title();

            },
            text: function(){
                const cardText = cardBody.appendChild(document.createElement("p"));
                cardText.setAttribute("class", " author card-text");
                cardText.textContent = book.author();
            },
            footer: function(){
                const cardFooter = card.appendChild(document.createElement("div"));
                cardFooter.setAttribute("class", "book-footer card-footer");
            },
            pages: function(){
                const pages = cardFooter.appendChild(document.createElement("p"));
                pages.textContent = `pages: ${book.pages()}`;
            },
            read: function(){
                const read = cardFooter.appendChild(document.createElement("p"));
                console.log(book.read())
                    if (book.read() === "on") {
                       read.textContent = "Read";
                    } else {
                       read.textContent = "Not Read";
                    }
            },
            remove: function(){} // adds a remove function button and logic to each div
          }
        
        }
      }
    }, //  create a Dom Book Element from a Book Obj
    remove: function () {}, // remove the Book from the library and the DOM
    library: function () {}, // create the library of books using bookOptions.dom
  };
  options.newBook();
  options.save();
  options.dom();

}