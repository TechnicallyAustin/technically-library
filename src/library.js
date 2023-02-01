// mac mini edit
myLibrary = [];
function Books(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

 Books.prototype.info = function(){}
 Books.prototype.id = function(){}

    const createLibraryForm = {
        // add fieldsets for each input
        form: null,
        
        createForm: function(){
            const formContainer = document.body.appendChild(document.createElement("div"));
            formContainer.setAttribute("class", "book-form")

            this.form = formContainer.appendChild(document.createElement("form"));
            this.form.setAttribute("class", "new-book")
        },

        prevent: function(){
            this.form.addEventListener("submit", function(event){
                event.preventDefault()
            })
        },
        legend: function(){
            const legend = this.form.appendChild(document.createElement("legend"));
            legend.setAttribute("class", "form-legend");
            legend.textContent = "Add a new book here!";
        },
        title: function(){
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
        author: function(){
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
        pages: function(){
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
        read: function(){
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
        submit: function(){
            const field = this.form.appendChild(document.createElement("fieldset"));
            field.setAttribute("class", "submit-input form-input");

            submitLabel = field.appendChild(document.createElement("label"));
            submitLabel.setAttribute("for", "add-book");
            const submit = field.appendChild(document.createElement("input"));
            submit.setAttribute("type", "submit");
            submit.setAttribute("value", "Add Book");
            submit.setAttribute("id", "add-book");
        }
    }; // this is run on button click event

    function BookButtonEvent() {
      // locate button
        const button = document.getElementById("new-book-button");
        button.addEventListener("click", () =>{
            console.log("clicked")
            createLibraryForm.createForm();
            createLibraryForm.legend()
            createLibraryForm.title()
            createLibraryForm.author()
            createLibraryForm.pages()
            createLibraryForm.read()
            createLibraryForm.submit()
            createLibraryForm.prevent()
        })
    }; BookButtonEvent()

    const bookByForm = {
        // builds a book object given the book form info
        title: function(){},
        author: function(){},
        pages: function(){},
        read: function(){},
        add: function(){}
    }; // called from the submit event

    const sumbitButtonEvent = {
      add: function(){} // calls bookByForm()
    };





