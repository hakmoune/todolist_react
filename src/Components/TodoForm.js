import React, { useState } from "react";
import shortid from "shortid";

export function TodoForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state => [
      {
        id: shortid.generate(),
        text: text,
        complete: false
      },
      ...state
    ]);

    setText("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="input-field"
          name="todo"
          type="text"
        />
        <button className="btn" type="submit">
          Add To Do
        </button>
      </form>
    </React.Fragment>
  );
}
