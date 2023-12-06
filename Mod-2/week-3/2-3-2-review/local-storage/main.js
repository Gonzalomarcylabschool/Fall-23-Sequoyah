import { getNames, setNames, addName, removeName } from "./local-storage-mods.js";
import { removeNamefromDOM,addNewP } from "./utils.js";

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
  removeNamefromDOM(formObj.remove);

  e.target.reset();
}

const main = () => {
  
  restoreFromLocal();
  document.querySelector('#name').addEventListener('submit', handleAddSubmit);
  document.querySelector('#removeName').addEventListener('submit', handleRemoveSubmit)
}

main()