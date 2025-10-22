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
    'Agatha Christie',
    272, true, myLibrary)

const darkPlaces = addBookToLibrary('Dark Places', 
    'Gillian Flynn',
    349, true, myLibrary)


console.log(myLibrary)