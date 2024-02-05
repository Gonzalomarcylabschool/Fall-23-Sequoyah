import './style.css'
import Library from './models/Library.js';
import Book from './models/Book.js';
import { renderLibraries, renderMain } from './utils/render-functions.js';

const main = () => {
  // console.log(Library);
  // console.log(Book);
  const marcyLibrary = new Library('Marcy Library', '822 third ave');
  const gonzaloLibrary = new Library('Gonzalo Library', '1924 Kings Highway');
  console.log(marcyLibrary, gonzaloLibrary);

  marcyLibrary.addBook('How to code', 'Gonzalo Romero', 'how to');
  marcyLibrary.addBook('The Whole-Brain Child', 'DR Daniel Siegel', 'self help');
  console.log(marcyLibrary.listBooks());
  renderMain();
  renderLibraries();
}
 
main();