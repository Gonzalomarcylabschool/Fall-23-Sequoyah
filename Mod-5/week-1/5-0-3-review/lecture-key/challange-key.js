class Library {
  #name;
  #location;
  #books;

  constructor(name, location) {
    this.#name = name;
    this.#location = location;
    this.#books = [];
  }

  addBook(title, author, genre) {
    const bookID = this.generateUniqueBookID();
    const newBook = {
      id: bookID,
      title,
      author,
      genre,
    };
    this.#books.push(newBook);
    console.log(`Book added: ${title} by ${author}`);
  }

  removeBook(bookID) {
    const indexToRemove = this.#books.findIndex(book => book.id === bookID);
    if (indexToRemove !== -1) {
      const removedBook = this.#books.splice(indexToRemove, 1)[0];
      console.log(`Book removed: ${removedBook.title} by ${removedBook.author}`);
    } else {
      console.log(`Book with ID ${bookID} not found.`);
    }
  }

  listBooks() {
    console.log(`\nLibrary: ${this.#name} (${this.#location})`);
    console.log('Books:');
    this.#books.forEach(book => {
      console.log(`- ${book.title} by ${book.author} (ID: ${book.id}, Genre: ${book.genre})`);
    });
    console.log('\n');
  }

  static generateLibraryName() {
    const prefixes = ['City', 'Central', 'Downtown', 'Metropolitan'];
    const suffixes = ['Library', 'Book Haven', 'Reading Center', 'Literary Hub'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomPrefix} ${randomSuffix}`;
  }

  // Private method to generate unique book IDs
  generateUniqueBookID() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
}


const cityLibrary = new Library('City Library', '123 Main St');
cityLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic');
cityLibrary.addBook('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
cityLibrary.addBook('1984', 'George Orwell', 'Dystopian');
cityLibrary.listBooks();

cityLibrary.listBooks();
