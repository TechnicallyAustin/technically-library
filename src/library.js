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
        // builds new book form
        form: function(){
            let bookForm = document.body.appendChild(document.createElement("form"));
            bookForm.setAttribute("class", "book-form")
            bookForm
        },

        prevent: function(){
            this.form().addEventListener("submit", function(event){
                event.preventDefault()
            })
        },
        legend: function(){
            const legend = this.form().appendChild(document.createElement("legend"));
            legend.setAttribute("class", "form-legend")
        },
        title: function(){
            const label = this.form().appendChild(document.createElement("label"));
            label.setAttribute("for", "book-title")
            const title = this.form().appendChild(document.createElement("input"));
            title.setAttribute("class", "book-title");
            title.textContent = "Title";
        },
        author: function(){
            const label = this.form().appendChild(document.createElement("label"));
            label.setAttribute("for", "book-author")
            const title = this.form().appendChild(document.createElement("input"));
            title.setAttribute("class", "book-author");
            title.textContent = "Author";
        },
        pages: function(){
            const label = this.form().appendChild(document.createElement("label"));
            label.setAttribute("for", "book-pages")
            const title = this.form().appendChild(document.createElement("input"));
            title.setAttribute("class", "book-pages");
            title.textContent = "# of Pages";
        },
        read: function(){
            const label = this.form().appendChild(document.createElement("label"));
            label.setAttribute("for", "book-read")
            const title = this.form().appendChild(document.createElement("input"));
            title.setAttribute("class", "book-read");
            title.textContent = "Read?";
        },
        submit: function(){
            const label = this.form().appendChild(document.createElement("label"));
            label.setAttribute("for", "book-title")
            const title = this.form().appendChild(document.createElement("input"));
            title.setAttribute("class", "book-title");
            title.textContent = "Title";
        }
    }; // this is run on button click event

    const BookButtonEvent = {
      // locate button
      click: function (){}
    };

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

console.log(createLibraryForm.prevent())


