import { getNames, setNames, addName } from "./local-storage-mods.js";
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData);

  console.log(formObj);
  names.push(formObj.name);
  console.log(names);
  mainPage.innerHTML = `<li>${formObj.name}</li>`;
  if(!getNames()){
    setNames( [formObj.name] );
    console.log(localStorage);
  } else {
    addName(formObj.name);
  }

  form.reset();
}
const mainPage = document.querySelector('main');
const names = [];


const main = () => {
  document.querySelector('#name').addEventListener('submit', handleSubmit);
}

main()