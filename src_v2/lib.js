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
    const form = document.querySelector(".new-book");

    function formOperations(){
        const formOptions = {
            add: function(){}, // adds an event listener to the form that will create the form
            form: function(){}, // creates the form element with class new-book
            prevent: function(){}, // prevents the default submission for the form
            legend: function(){}, // title of the new book form
            title: function(){}, // Book title input
            author: function(){}, // Book author input
            pages: function(){}, // Book pages input
            read: function(){}, // book read boolean input
            submit: function(){} // adds event listener that saves the information from form to create Book
        };
    };
};

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
};


