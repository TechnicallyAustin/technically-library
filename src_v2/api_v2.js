// creates Semantic HTML elements
function createLibrary(){
    // Header
    const headerElements = {
        header: function(){
            const head = document.body.appendChild(document.createElement("header"));
            this.head = head
        }, // creates header container
        navbar: function(){
            const nav = this.head.appendChild(document.createElement("navbar"));
            const text = nav.appendChild(document.createElement("p"));
            text.textContent = "Teechnically Library"
        } // creates nav Bar and Nav elements
    };
    headerElements.header()
    headerElements.navbar()

    // Main
    const mainElements = {
        main: function(){
            
        }, // creates the main with class Library
        section: function(){}, // creates a section with class shelf
        article: function(){}, // create an aritcle per Book with class book
        aside: function(){} //  defines Form and form creation button
    }

    // Footer
    const footerElements = {
        footer: function(){}, // creates the footer element
        info: function(){} // creates the info within the footer.
    }
}; createLibrary()