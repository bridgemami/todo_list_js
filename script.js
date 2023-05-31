//Adding new todos
const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  //template for the li tag
  const html = `
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;
  // += to add to the list
  ul.innerHTML += `${html}`;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //add is the name for the input and .trim() to get rid of the whitespace
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
//delete a todo
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove("delete");
  }
});

//searching for a todo
const filtering = (term) => {
  const todoList = Array.from(ul.children);
  todoList.filter((todo) => {
    //delete from the search results
    return !todo.textContent.toLowerCase().includes(term);
  }).forEach((todo) => {
    todo.classList.add('filtered');
  })

  todoList.filter((todo) => {
    //to included
    return todo.textContent.toLowerCase().includes(term);
  }).forEach((todo) => {
    todo.classList.remove('filtered');
  })
};
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filtering(term);
});
