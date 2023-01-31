function header(){

    const nav = document.body.appendChild(document.createElement("div"))
    nav.setAttribute("class", "nav-bar")
    const title = nav.appendChild(document.createElement("h2"))
    title.textContent = "Technically Library"
}; header()


function library(){
    const library = document.body.appendChild(document.createElement("div"));
    library.setAttribute("class", "library");

    function newBookButton(){
        const button = document.body.appendChild(document.createElement("input"))
        button.setAttribute("type", "button")
        button.setAttribute("class", "create-form");
        button.setAttribute("value", "Add a new Book");
        button.setAttribute("id", "new-book-button");
    }; newBookButton()

    function shelves(){
        const shelves = library.appendChild(document.createElement("div"));
        shelves.setAttribute("class", "shelves")

        function books(){
            const books = library.appendChild(document.createElement("div"));
            books.setAttribute("class", "books");
        }; books()

    };shelves()
}; library()