const addForm = document.querySelector('.add');

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const toDo = addForm.add.value.trim();

  console.log(toDo);
})