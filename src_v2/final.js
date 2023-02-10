// Book constructor w/ form Inputs
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
    lib: [],
    addBook: function(book){
        this.lib.push(book)
    },
    removeBook: function(){},
}


// Card object
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
    add: function(){
        this.newCard()
        this.header()
        this.body()
        this.title()
        this.text()
        this.footer()
        this.pages()
        this.read()
        this.remove()
    }
}; cards.add()

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
            function fieldset(){}
            function label(){}
            function input(){}
        }
    },
    submit: function(){
        const submit = this.form.appendChild(document.createElement("button"));
        submit.setAttribute("id", "submit-book")
        submit.setAttribute("class", "submit-book")
        submit.setAttribute("value", "Add Book")

        submit.addEventListener("click", () => {

        })
    },
    add: function(){
        this.newForm()
        this.prevent()
        this.legend()
        this.inputs()
        this.submit()
    }
}; form.add()


