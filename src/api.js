function library(){
    const library = document.body.appendChild(document.createElement("div"));
    library.setAttribute("class", "library");

    function newBook(){
        const formContainer = document.body.appendChild(document.createElement("div"))
        formContainer.setAttribute("class", "book-form")

        const form = formContainer.appendChild(document.createElement("form"));
        form.setAttribute("class","new-book");

        let legend; // Form heading info
        
        let titleLabel;
        let title; // string
        
        let authorLabel
        let author; // string

        let pagesLabel;
        let pages; // number

        let readLabel;
        let read; // boolean
    }; newBook()

    function shelves(){
        const shelves = library.appendChild(document.createElement("div"));
        shelves.setAttribute("class", "shelves")

        function books(){}
    };shelves
}; library()