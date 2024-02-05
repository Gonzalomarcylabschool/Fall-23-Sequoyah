const getIdMaker = (id = 0) => {
  return () => ++id;
}
const getId = getIdMaker();

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = getId();
  }
}

class Library {
  #books = [];

  static #allLibraries = []
  constructor(name, address) {
    this.name = name;
    this.address = address;

    Library.#allLibraries.push(this);
  }
  addBook(title, author, genre) {
    const addedBook = new Book(title, author, genre);
    this.#books.push(addedBook);
    return addedBook;
  }
  listBooks() {
    return [...this.#books];
  }
  removeBook(id) {
    this.#books.splice(this.#books.findIndex((book) => book.id === id), 1);
  }

  static list() {
    return [...Library.#allLibraries];
  }
}

const cityLibrary = new Library('City Library', '123 Main St');

// Adding books to the library
cityLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic');
cityLibrary.addBook('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
cityLibrary.addBook('1984', 'George Orwell', 'Dystopian');

// Listing all books
console.log(cityLibrary.listBooks());

// Removing a book by ID
cityLibrary.removeBook(2);

// Listing books after removal
console.log(cityLibrary.listBooks())

const privateLibrary = new Library('My Library', 'My home');
console.log(Library.list());
// [
//   Library { name: 'City Library', address: '123 Main St' },
//   Library { name: 'My Library', address: 'My home' }
// ]