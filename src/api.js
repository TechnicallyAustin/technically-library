function header(){

    const nav = document.body.appendChild(document.createElement("div"))
    nav.setAttribute("class", "nav-bar")
    const title = nav.appendChild(document.createElement("h2"))
    title.textContent = "Technically Library"
}; header()


function library(){
    const library = document.body.appendChild(document.createElement("div"));
    library.setAttribute("class", "library");



    function newBook(){
        const formContainer = document.body.appendChild(document.createElement("div"))
        formContainer.setAttribute("class", "book-form")


        // create a div that holds a button and the title
        // the button creates the form.
       function formTitle() {
            const formTitle = formContainer.appendChild(document.createElement("h3"));
            formTitle.setAttribute("class", "form-title");
            formTitle.textContent = "Read anything lately?"
        }; formTitle()
        
        function bookForm(){
            const form = formContainer.appendChild(document.createElement("form"));
            form.setAttribute("class","new-book");
            //form.setAttribute("onsubmit","bookData()");
            form.setAttribute("method", "");

            function legend(){
                const legend = form.appendChild(document.createElement("legend")); // Form heading info
                legend.setAttribute("class", "form-legend");
                legend.textContent = "Add a new book here!"
            }; legend()

            function titleInput(){
                const field = form.appendChild(document.createElement("fieldset"));
                field.setAttribute("class", "title-input form-input");

                let titleLabel = field.appendChild(document.createElement("label"));
                titleLabel.setAttribute("for", "book-title")
                titleLabel.textContent = "Title"
                
                const title = field.appendChild(document.createElement("input"));
                title.setAttribute("id", "book-title");
                title.setAttribute("type", "text");
                title.setAttribute("placeholder", "Hunger Games");

            }; titleInput()
            
            function authorInput(){
                const field = form.appendChild(document.createElement("fieldset"));
                field.setAttribute("class", "author-input form-input");

                let authorLabel = field.appendChild(document.createElement("label"));
                authorLabel.setAttribute("for", "book-author")
                authorLabel.textContent = "Author"

                const author = field.appendChild(document.createElement("input"));
                author.setAttribute("id", "book-author");
                author.setAttribute("type", "text");
                author.setAttribute("placeholder", "Susan Collins");
            }; authorInput()
            
            function pagesInput(){
                const field = form.appendChild(document.createElement("fieldset"));
                field.setAttribute("class", "pages-input form-input");

                let pagesLabel = field.appendChild(document.createElement("label"));
                pagesLabel.setAttribute("for", "book-pages")
                pagesLabel.textContent = "# of Pages"

                const pages = field.appendChild(document.createElement("input"));
                pages.setAttribute("id", "book-pages");
                pages.setAttribute("type", "number");
                pages.setAttribute("placeholder", "395");

            };pagesInput()

            function readInput(){
                const field = form.appendChild(document.createElement("fieldset"));
                field.setAttribute("class", "read-input form-input")
                let readLabel = field.appendChild(document.createElement("label"));
                readLabel.setAttribute("for", "book-read");
                readLabel.textContent = "Read?"

                const read = field.appendChild(document.createElement("input"));
                read.setAttribute("id", "book-read");
                read.setAttribute("type", "checkbox");
                read.setAttribute("value", "read");
            };readInput()

            function submit(){
                const field = form.appendChild(document.createElement("fieldset"));
                field.setAttribute("class", "submit-input form-input");

                submitLabel = field.appendChild(document.createElement("label"))
                submitLabel.setAttribute("for", "add-book")
                const submit = field.appendChild(document.createElement("input"));
                submit.setAttribute("type", "submit");
                submit.setAttribute("value", "Add Book");
                submit.setAttribute("id", "add-book");
            }; submit()
        }; bookForm()
    }; newBook()

    function shelves(){
        const shelves = library.appendChild(document.createElement("div"));
        shelves.setAttribute("class", "shelves")

        function books(){
            const books = library.appendChild(document.createElement("div"));
            books.setAttribute("class", "books");
        }; books()

    };shelves()
}; library()