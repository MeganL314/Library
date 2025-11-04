const myLibrary = []
const button = document.querySelector("#new_book_button");


button.addEventListener("click", () => {

  //Make a form for all of this information
  const n_title = prompt("Title:");
  const n_author = prompt("Author:");

});


function Book(title, author, pages, read_status) {
    // the constructor.. 
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
    this.info = function() {
        if (this.read_status = true){
            message = "read";
        } else {
            message = "not read yet";
        }
        return this.title + " by " + this.author + ", " + 
        this.pages + " pages, " + message + ".";
  };
    this.id = crypto.randomUUID()

}

function addBookToLibrary(title, author, pages, read_status, bookArr) {
  // take params, create a book then store it in the array
    let newBook = new Book(title, author, pages, read_status);
    bookArr.push(newBook);
    return bookArr;
}


const andThen = addBookToLibrary('And Then There Were None', 
    'Agatha Christie', 272, true, myLibrary)

const darkPlaces = addBookToLibrary('Dark Places', 
    'Gillian Flynn', 349, true, myLibrary)

const readyPlayer = addBookToLibrary('Ready Player One', 
    'Ernest Cline', 480, true, myLibrary)

const Circe = addBookToLibrary('Circe', 
    'Madeline Miller', 393, true, myLibrary)

console.log(myLibrary)
console.log(myLibrary.length)


// Create a grid of 'cards' displaying each book

function createGrid(size) {

  const container = document.querySelector("#card-container");
  // create a square of divs
  const widthHeight = 800 / size + "px";

  for (let i=1; i<=size; i++ ){
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j=1; j<=size; j++ ){
          const grid = document.createElement("div");
          grid.classList.add("grid");
          row.appendChild(grid);
          grid.style.width = widthHeight;
          grid.style.height = widthHeight;
      }
      container.appendChild(row);
  }

}

const sqr_root = Math.sqrt(myLibrary.length);
const round_sqrt = Math.ceil(sqr_root);
createGrid(round_sqrt)


