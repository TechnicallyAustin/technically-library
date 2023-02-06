// handles book creation and Book logical operations
function Book(title, author, pages, read){
    title = this.title;
    author = this.author;
    pages = this.pages;
    read = this.read;
};

// Prototype Methods
Book.prototype.info = function(){};
Book.prototype.id = function(){};

// handles form logical operations
function form(){
    const button = document.querySelector(".form-button");

    function formOperations(){
        const aside = document.querySelector("aside");

        const formOptions = {
            form: null, // new form sets this.form = form
            newForm: function(){
                this.form = aside.appendChild(document.createElement("form"))
                this.form.setAttribute("class", "new-book-form")

            }, // creates the form element with class new-book
            prevent: function(){
                this.form.addEventListener("submit", function(event){
                    event.preventDefault()
                })
            }, // prevents the default submission for the form
            legend: function(){
                const legend = this.form.appendChild(document.createElement("legend"))
                legend.setAttribute("id", "form-legend")
                legend.textContent = "This is a Form Legend"
            }, // title of the new book form
            inputs: function(){
                const inputs = ["title", "author", "pages", "read"]

                for (let i = 0; i < inputs.length; i++){
                    let input = inputs[i]

                    const fieldset = this.form.appendChild(document.createElement("fieldset"));
                    fieldset.setAttribute("class", `${input}-field`)

                    const label = fieldset.appendChild(document.createElement("label"))
                    label.setAttribute("for", `book-${input}`)
    
                    input = this.form.appendChild(document.createElement("input"))
                    input.setAttribute("type", "text")
                    input.setAttribute("id", `book-${input}`)
                    input.setAttribute("class", "form-inputs");

                    if (input === pages){
                        input.setAttribute("type", "number")
                    }

                    if (input === read){
                        input.setAttribute("type", "checkbox")
                    }
                };

            },
            submit: function(){
                const submit = this.form.appendChild(document.createElement("button"));
                submit.setAttribute("class", "add-book")
                

            }, // adds event listener that saves the information from form to create Book
            add: function(){} // adds an event listener to the button that will create the form
        };

        
    }; formOperations()
}; form()

// Book Logic
function bookOperations(){
    const myLibrary = [];
    const library = document.querySelector(".library");

    const options = {
        new: function(){}, // given Form input creates a Book Object
        save: function(){}, // after a Book has been created, adds to Library
        dom: function(){}, //  create a Dom Book Element from a Book Obj
        remove: function(){}, // remove the Book from the library and the DOM
        library: function(){} // create the library of books using bookOptions.dom
    };


}; bookOperations()

myLibrary = []
const bookOne = new Book("One Piece", "Eichiiro Oda", 10000, "read")
const bookTwo = new Book("Bleach", "Titee Kubo", 5000, "read");
const bookThree = new Book("Naruto", "Musashi Kishimoto", 10000, "read")
const bookFour = new Book("Hunger Games", "Susan Collins", 395, "read")

myLibrary.push(bookOne, bookTwo, bookThree, bookFour)
console.log("My Library", myLibrary)

