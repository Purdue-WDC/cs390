const $ = (selector) => document.querySelector(selector);

const todoList = $("#todos");
const completedTasks = $("#completed");
const todoForm = $("#todo-form");
const input = $("#input");

function todoChild(text, status) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.className = "todo-body";
  span.textContent = text;

  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);
  if (status) {
    span.style.textDecoration = "line-through";
    button.textContent = "🗑️";
    button.addEventListener("click", () => {
      removeTodo(li);
    });
  } else {
    button.textContent = "✅";

    button.addEventListener("click", () => {
      completeTodo(li, text);
    });
  }
  return li;
}
function createTodo(name) {
  todoList.appendChild(todoChild(name));
}
function completeTodo(li, text) {
  removeTodo(li);
  completedTasks.appendChild(todoChild(text, true));
}

function removeTodo(li) {
  li.remove();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createTodo(input.value);
  input.value = "";
});
