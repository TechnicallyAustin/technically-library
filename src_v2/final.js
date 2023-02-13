// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};
Book.prototype.info = function () {};
Book.prototype.id = function () {};

// Library Object
const library = {
    books: [],
    addBook: function(book){

        this.lib.push(book)
    },
    removeBook: function(){
        this.lib.pop(book)
    }
}

function Card(title, author, pages, read){
    this.title = function(){}
    this.author = function(){}
    this.pages = function(){}
    this.read = function(){}
}

// Card Data
function cardOperations(){
// Card Variables

    // Card Object
    const cards = {
        card: null,
        newCard: function(){
            const section = document.querySelector(".shelf")
            const newCard = section.appendChild(document.createElement("article"))
            newCard.setAttribute("class", "card")
            this.card = newCard 
        },
        header: function(){
            const header = this.card.appendChild(document.createElement("div"))
            header.setAttribute("class", "card-header")
        },
        body: function(){
            const body = this.card.appendChild(document.createElement("div"));
            body.setAttribute("class", "card-body")
            this.body = body
        },
        title: function(){
            const title = this.body.appendChild(document.createElement("h5"));
            title.setAttribute("class", "card-title")

        },
        text: function(){
            const text = this.body.appendChild(document.createElement("p"))
            text.setAttribute("class", "card-text") 
        },
        footer: function(){
            const footer = this.card.appendChild(document.createElement("div"))
            footer.setAttribute("class", "card-footer")
            this.footer = footer
        },
        pages: function(){
            const pages = this.footer.appendChild(document.createElement("p"))
            pages.setAttribute("class", "pages")
        },
        read: function(){
            const read = this.footer.appendChild(document.createElement("p"));
            read.setAttribute("class", "read")
        },
        remove: function(){
            const remove = this.footer.appendChild(document.createElement("button"))
            remove.setAttribute("id", "remove-book")
            remove.setAttribute("value", "Remove")
        },
        create: function(){
            this.newCard()
            this.header()
            this.body()
            this.title()
            this.text()
            this.footer()
            this.pages()
            this.read()
            this.remove()
        },
        createBooks: function(){
            const books = library.books
            for (let i = 0; i < books.length; i++){
                let book = books[i]

            }
        }
    }; 

}

// Form Data
function formOperations(){
    const newButton = document.querySelector(".new-book-btn")


    function submitForm(){}

    // Form Object
    const form = {
        form: null,
        newForm: function(){
            const container = document.querySelector(".new-book-container")
            const newForm = container.appendChild(document.createElement("form"))
            newForm.setAttribute("class", "book-form")
            this.form = newForm
        },
        prevent: function(){
            this.form.addEventListener("submit", function(event){
                event.preventDefault()
            })
        },
        legend: function(){
            const legend = this.form.appendChild(document.createElement("legend"))
            legend.setAttribute("class", "legend")
            legend.textContent = "Read anything fun?"
        },
        inputs: function(){
            const form = this.form
            const inputs = ["Title", "Author", "Pages", "Read"]
            for (let i = 0; i < inputs.length; i++){
                let value = inputs[i]

                const formFields = {
                    fieldset: null,
                    newField: function(){
                        let field = form.appendChild(document.createElement("fieldset"));
                        field.setAttribute("class",`${value}-field row d-flex flex-column align-items-start justify-content-space ms-4 `);
                        this.fieldset = field

                        if (value === "Read"){
                            let field = form.appendChild(document.createElement("fieldset"));
                            field.setAttribute("class",`${value}-field row d-flex  align-items-center justify-content-space p-2 `);
                            this.fieldset = field
                        }
                    },
                    label: function(){
                        console.log(this)
                        
                        if (value === "Pages"){
                            label = this.fieldset.appendChild(document.createElement("label"))
                            label.setAttribute("for", `book-${value}`);
                            label.setAttribute("class", "form-label align-items-start mb-0 pt-2");
                            label.textContent = "# of Pages"
                        } else {
                            let label = this.fieldset.appendChild(document.createElement("label"))
                            label.setAttribute("for", `book-${value}`);
                            label.setAttribute("class", "form-label align-items-start mb-0 pt-2");
                            label.textContent = value;
                        }
                    },
                    inputs: function(){
                        let input = this.fieldset.appendChild(document.createElement("input"));
                        input.setAttribute("type", "text")
                        input.setAttribute("id", `book-${value}`);
                        input.setAttribute("class", "form-inputs w-75 ms-6");
                        input.setAttribute("placeholder", `${value}`);

                        if (value === "Read"){
                            input.setAttribute("type", "checkbox");
                            input.setAttribute("class", "form-inputs  align-self-center mt-0")
                        } else if (value === "Pages"){
                            input.setAttribute("type", "number")
                            input.setAttribute("placeholder", "395")
                        }
                    },

                };
                formFields.newField()
                formFields.label()
                formFields.inputs()
            }
        },
        submit: function(){
            const submit = this.form.appendChild(document.createElement("button"));
            submit.setAttribute("id", "submit-book")
            submit.setAttribute("class", "submit-book")
            submit.setAttribute("value", "Add Book")
            submit.textContent = "Add Book"

            submit.addEventListener("click", () => {
                console.log("form submitted")
                submitForm()

            })
        },
        create: function(){
            this.newForm()
            this.prevent()
            this.legend()
            this.inputs()
            this.submit()
        }
    };


    newButton.addEventListener("click", () => {
        console.log("click")
        form.create()
    })

}; formOperations()


function populate(){
    // create a function that referneces each  object to...

        // retrieve form input 
            // store form input as an object

        // create a Book Object using form input
            // save book object to library
        
        // Iterate Library and create DOM Cards for each book in the library.


    //  Consider changing the card into a constructor and initialize the New Card object with form inputs as arguments
    // Form --> Library --> Card

}