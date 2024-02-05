import getId from "../utils/getId.js";

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = getId();
  }
}

export default Book;