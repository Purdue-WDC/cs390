import {useState} from "react";
function clone(todos) {
  return {completed: [...todos.completed], pending: [...todos.pending]};
}
export function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({completed: [], pending: []});
  function handleSubmit(e) {
    e.preventDefault();
    const temp = clone(todos);
    temp.pending.push({text, id: Math.random()});
    setTodos(temp);
    setText("");
  }

  return (
    <div>
      <section>
        <h1>What needs to be done?</h1>
        <ul>
          {todos.pending.map((x) => (
            <li key={x.id}>
              <span>{x.text}</span>
              <button
                onClick={() => {
                  const temp = clone(todos);
                  temp.pending = temp.pending.filter(
                    (item) => item.id !== x.id
                    //using closures      ^^
                  );
                  temp.completed.push(x);
                  setTodos(temp);
                }}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1>Completed todos</h1>
        <ul>
          {todos.completed.map((x) => (
            <li key={x.id}>
              <span>{x.text}</span>
              <button
                onClick={() => {
                  const temp = clone(todos);
                  temp.completed = temp.completed.filter(
                    (item) => item.id !== x.id
                  );

                  setTodos(temp);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
