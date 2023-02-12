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

// Card Data
function cardData(){
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
function formData(){
// Form Variables

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
        },
        inputs: function(){
            const inputs = ["Title", "Author", "Pages", "Read"]
            for (let i = 0; i < inputs.length; i++){
                let value = inputs[i]

                function fieldset(){
                    const fieldset = this.form.appendChild(document.createElement("fieldset"));
                    fieldset.setAttribute("class",`${value}-field row d-flex flex-column align-items-start justify-content-space ms-4 `);
                }
                function label(){
                    const label = fieldset.appendChild(document.createElement("label"));
                    label.setAttribute("for", `book-${value}`);
                    label.setAttribute("class", "form-label align-items-start mb-0 pt-2");
                    label.textContent = input;
                }; label()
                function input(){
                    input = fieldset.appendChild(document.createElement("input"));
                    input.setAttribute("id", `book-${value}`);
                    input.setAttribute("class", "form-inputs w-75 ms-6");
                    input.setAttribute("placeholder", `${value}`);
                }

                if (value === "Read"){
                    function fieldset(){}
                    function label(){}
                    function input(){}
                } else if (value === "Pages"){
                    function label(){}
                    function input(){}
                }
            }
        },
        submit: function(){
            const submit = this.form.appendChild(document.createElement("button"));
            submit.setAttribute("id", "submit-book")
            submit.setAttribute("class", "submit-book")
            submit.setAttribute("value", "Add Book")

            submit.addEventListener("click", () => {
                console.log("form submitted")
                console.log("Create Book -> Save Book To Lib --> Create Lib Book Cards")
            })
        },
        create: function(){
            this.newForm()
            this.prevent()
            this.legend()
            this.inputs()
            this.submit()
        }
    }; form.create()

}


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