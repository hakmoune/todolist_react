import React, { useState } from "react";
import { TodoForm } from "./Components/TodoForm";
import { Todo } from "./Components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [toggle, setToggle] = useState(false);

  const handleRemoveCompleteTodo = () => {
    setTodos(todos.filter(value => !value.complete));
  };

  const handleToggleAll = () => {
    setTodos(todos.map(value => ({ ...value, complete: toggle })));
    setToggle(!toggle);
  };

  return (
    <div>
      <h4>TO DO LIST</h4>
      <TodoForm onSubmit={setTodos} />
      <ul>
        {todos.map(value => (
          <Todo
            key={value.id}
            todo={value}
            setTodos={setTodos}
            status={status}
          />
        ))}
      </ul>

      <button onClick={() => setStatus("All")}>All</button>
      <button onClick={() => setStatus("Active")}>Active</button>
      <button onClick={() => setStatus("Completed")}>Completed</button>
      <div>
        {todos.some(value =>
          value.complete ? (
            <button onClick={handleRemoveCompleteTodo}>
              Remove All Complete todos
            </button>
          ) : null
        )}
        <button onClick={handleToggleAll}>
          Toggle all complete: {`${toggle}`}
        </button>
      </div>
    </div>
  );
}

export default App;
