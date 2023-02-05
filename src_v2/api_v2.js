
// creates Semantic HTML elements
function createLibrary() {
  // Header
  const headerElements = {
    header: function () {
      const head = document.body.appendChild(document.createElement("header"));
      head.setAttribute("class", "header container-md border");
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
      main.setAttribute("class", "main library");
      this.main = main;
    }, // creates the main with class Library
    section: function () {
      const section = this.main.appendChild(document.createElement("section"));
      section.setAttribute("class", "shelf");
      this.section = section;
    }, // creates a section with class shelf
    article: function () {}, // create an aritcle per Book with class book
    aside: function () {
      const aside = this.main.appendChild(document.createElement("aside"));
      const button = aside.appendChild(document.createElement("button"));
    }, //  defines Form and form creation button
  };
  mainElements.main();
  mainElements.section();
  mainElements.aside();

  // Footer
  const footerElements = {
    footer: function () {
      const footer = document.body.appendChild(
        document.createElement("footer")
      );
      footer.setAttribute("class", "footer");
      this.footer = footer;
    }, // creates the footer element
    info: function () {
      const info = this.footer.appendChild(document.createElement("p"));
    }, // creates the info within the footer.
  };
  footerElements.footer();
  footerElements.info();
}
createLibrary();
