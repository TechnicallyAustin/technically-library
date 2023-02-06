
// creates Semantic HTML elements
function createLibrary() {
  // Header
  const headerElements = {
    header: function () {
      const head = document.body.appendChild(document.createElement("header"));
      head.setAttribute("class", "container-fluid header bg-dark text-white ");
      this.head = head;
    }, // creates header container
    navbar: function () {
      const nav = this.head.appendChild(document.createElement("navbar"));
      const text = nav.appendChild(document.createElement("p"));
      text.textContent = "Teechnically Library";
    }, // creates nav Bar and Nav elements
  };
  headerElements.header();
  headerElements.navbar();

  // Main
  const mainElements = {
    main: function () {
      const main = document.body.appendChild(document.createElement("main"));
      main.setAttribute("class", "container-xl row bg-primary justify-content-center library ");
      this.main = main;
    }, // creates the main with class Library
    aside: function () {
      const aside = this.main.appendChild(document.createElement("aside"));
      aside.setAttribute("class", "col-4 h-25  bg-secondary aside d-flex justify-content-center align-items-center")

      const button = aside.appendChild(document.createElement("button"));
      button.setAttribute("class", "btn-primary w-75")
      button.textContent = "Add Book"
    }, //  defines Form and form creation button
    section: function () {
      const section = this.main.appendChild(document.createElement("section"));
      section.setAttribute("class", "col-8 h-75 bg-light shelf");
      this.section = section;
    }, // creates a section with class shelf
    article: function () {}, // create an aritcle per Book with class book
  };
  mainElements.main();
  mainElements.aside();
  mainElements.section();

  // Footer
  const footerElements = {
    footer: function () {
      const footer = document.body.appendChild(document.createElement("footer"));
      footer.setAttribute("class", "footer bg-dark text-white");
      this.footer = footer;
    }, // creates the footer element
    info: function () {
      const info = this.footer.appendChild(document.createElement("p"));
      info.textContent = "This is footer Text"
    }, // creates the info within the footer.
  };
  footerElements.footer();
  footerElements.info();
}
createLibrary();
