import React from "react";

export function Todo({ todo, setTodos, status }) {
  const handleClick = () => {
    setTodos(todos => todos.filter(value => value.id !== todo.id));
  };

  const handleCompleted = () => {
    setTodos(state =>
      state.map(value =>
        value.id === todo.id ? { ...todo, complete: !todo.complete } : value
      )
    );
  };

  return (
    <React.Fragment>
      {status === "All" && (
        <li>
          <span
            onClick={handleCompleted}
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
          >
            {todo.text}
          </span>
          <button onClick={handleClick}>X</button>
        </li>
      )}
      {status === "Active" && !todo.complete && (
        <li>
          <span onClick={handleCompleted}>{todo.text}</span>
          <button onClick={handleClick}>X</button>
        </li>
      )}
      {status === "Completed" && todo.complete && (
        <li>
          <span
            onClick={handleCompleted}
            style={{ textDecoration: "line-through" }}
          >
            {todo.text}
          </span>
          <button onClick={handleClick}>X</button>
        </li>
      )}
    </React.Fragment>
  );
}
