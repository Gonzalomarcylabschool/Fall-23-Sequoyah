import { getNames, setNames, addName, removeName, removeAllMatchingName } from "./local-storage-mods.js";
import { removeNamefromDOM, addNewP, clearMain } from "./utils.js";

const mainPage = document.querySelector('main');
const names = [];


const restoreFromLocal = () => {
  if(!getNames()) return;
  getNames().forEach(name => {
    addNewP(name, mainPage);
  });
}

const handleAddSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target));

  names.push(formObj.name);
  addNewP(formObj.name, mainPage);
  if(!getNames()){
    setNames( [formObj.name] );
    console.log(localStorage);
  } else {
    addName(formObj.name);
  }

  e.target.reset();
}

const handleRemoveSubmit = (e)=> {
  e.preventDefault();
 
  const formObj = Object.fromEntries(new FormData(e.target));

  removeName(formObj.remove);
  removeNamefromDOM(formObj.remove, true);

  e.target.reset();
}

const handleRemoveAll = (e)=> {
  e.preventDefault();
  const toBeRemoved = document.querySelector('#remove').value
  removeNamefromDOM(toBeRemoved);
  removeAllMatchingName(toBeRemoved);
  
}

const handleReset = (e) => {
  clearMain('main');
}

const main = () => {
  
  restoreFromLocal();

  document.querySelector('#name').addEventListener('submit', handleAddSubmit);
  document.querySelector('#removeName').addEventListener('submit', handleRemoveSubmit)
  document.querySelector('#removeAll').addEventListener('click', handleRemoveAll)
  document.querySelector('#reset').addEventListener('click', handleReset);

}

main()