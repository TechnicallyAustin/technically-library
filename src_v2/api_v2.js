
// creates Semantic HTML elements
function createLibrary() {
  // Header
  const headerElements = {
    header: function () {
      const head = document.body.appendChild(document.createElement("header"));
      head.setAttribute("class", "container-fluid header bg-info text-white ");
      this.head = head;
    }, // creates header container
    navbar: function () {
      const nav = this.head.appendChild(document.createElement("navbar"));
      const text = nav.appendChild(document.createElement("p"));
      nav.setAttribute("class", "col text-center")
      text.textContent = "Technically Library";
    }, // creates nav Bar and Nav elements
  };
  headerElements.header();
  headerElements.navbar();

  // Main
  const mainElements = {
    main: function () {
      const main = document.body.appendChild(document.createElement("main"));
      main.setAttribute("class", "row row-cols-2 bg-primary d-flex justify-content-center library ");
      this.main = main;
    }, // creates the main with class Library
    aside: function () {
      const aside = this.main.appendChild(document.createElement("aside"));
      aside.setAttribute("class", "col-4 h-75 align-self-center d-flex flex-column justify-content-around align-items-center  bg-secondary aside")

      const btnContainer = aside.appendChild(document.createElement("div"))
      btnContainer.setAttribute("class", " row btn-container d-flex justify-content-center h-25 w-75");

      const button = btnContainer.appendChild(document.createElement("button"));
      button.setAttribute("class", "col new-book-btn btn-primary h-25 ")
      button.textContent = "Add Book"

      const container = aside.appendChild(document.createElement("div"));
      container.setAttribute(
        "class","new-book-container row h-50 w-75  bg-primary d-flex flex-column justify-content-around align-items-center");
    }, //  defines Form and form creation button
    section: function () {
      const section = this.main.appendChild(document.createElement("section"));
      section.setAttribute("class", "shelf col-8 h-75 d-flex flex-wrap  align-self-center align-content-start justify-content-around overflow-auto bg-dark p-2");
      this.section = section;
    } // creates a section with class shelf
  };
  mainElements.main();
  mainElements.aside();
  mainElements.section();

  // Footer
  const footerElements = {
    footer: function () {
      const footer = document.body.appendChild(document.createElement("footer"));
      footer.setAttribute("class", "footer bg-info text-white text-center");
      this.footer = footer;
    }, // creates the footer element
    info: function () {
      const info = this.footer.appendChild(document.createElement("p"));
      info.setAttribute("class", "col ")
      info.textContent = "This is footer Text"
    }, // creates the info within the footer.
  };
  footerElements.footer();
  footerElements.info();
}
createLibrary();
