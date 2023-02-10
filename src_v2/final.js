//Lib

// Book constructor w/ form Inputs
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}
Book.prototype.info = function () {};
Book.prototype.id = function () {};


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
        const read = this.footer.appendChild(document.createElement("p");
        read.setAttribute("class", "read")
    },
    remove: function(){
        const remove = this.footer.appendChild(document.createElement("button"))
        remove.
        remove.setAttribute("id", "remove-book")
        remove.setAttribute("value", "remove")
    }
}

const form = {
    form: null,
    newForm: function(){},
    prevent: function(){},
    legend: function(){},
    inputs: function(){},
    submit: function(){},
    add: function(){}
}



// form constructor

    // form
        // inputs
        // submit
        

// card constructor w/ book properties

    // card
        // 