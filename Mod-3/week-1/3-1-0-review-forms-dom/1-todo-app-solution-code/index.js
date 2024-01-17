const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData);
  formObj.isComplete = !!formObj.isComplete
  console.log('here is your data:', formObj);

  // do something with the form
  const todoList = document.querySelector('#todo-list');
  const newListItem = document.createElement('li');
  newListItem.textContent = `${formObj.todo} - ${formObj.isComplete ? 'Complete' : 'Incomplete'}`;
  newListItem.dataset.isComplete = formObj.isComplete;

  todoList.append(newListItem);

  e.target.reset();
}

const main = () => {
  document.querySelector('#todo-form').addEventListener('submit', handleSubmit);
}

main();