const myLibrary = []

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
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + message + "."
  };
    this.id = crypto.randomUUID()

}

function addBookToLibrary(title, author, pages, read_status) {
  // take params, create a book then store it in the array

}







const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien',
    295, false
)

console.log(theHobbit.info())
