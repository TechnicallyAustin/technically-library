function library(){
    const library = document.body.appendChild(document.createElement("div"));
    library.setAttribute("class", "library");

    function newBook(){
        const formContainer = document.body.appendChild(document.createElement("div"))
        formContainer.setAttribute("class", "book-form")

        const formTitle = formContainer.appendChild(document.createElement("h2"));
        formTitle.setAttribute("class", "form-title");
        formTitle.textContent = "Read anything lately?"

        const form = formContainer.appendChild(document.createElement("form"));
        form.setAttribute("class","new-book");

        const legend = form.appendChild(document.createElement("legend")); // Form heading info
        legend.setAttribute("class", "form-legend");
        legend.textContent = "Add a new book here!"
    
        let titleLabel = form.appendChild(document.createElement("label"));
        titleLabel.setAttribute("for", "book-title")
        titleLabel.textContent = "Title"
        let title; // string
        
        let authorLabel = form.appendChild(document.createElement("label"));
        authorLabel.setAttribute("for", "book-author")
        authorLabel.textContent = "Author"
        let author; // string

        let pagesLabel = form.appendChild(document.createElement("label"));
        pagesLabel.setAttribute("for", "book-pages")
        pagesLabel.textContent = "# of Pages"
        let pages; // number

        let readLabel = form.appendChild(document.createElement("label"));
        readLabel.setAttribute("for", "book-read")
        readLabel.textContent = "Read?"
        let read; // boolean
    }; newBook()

    function shelves(){
        const shelves = library.appendChild(document.createElement("div"));
        shelves.setAttribute("class", "shelves")

        function books(){}
    };shelves
}; library()