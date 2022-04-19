import React, { useState } from "react";

export const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  // post api part here
  const postTodo = async (value) => {
    let responce = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value,
        completed: false,
      }),
    });
    let data = await responce.json();
    onAdd(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={"Add todo"}
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button
        onClick={() => {
          let value = newTodo.trim();
          if (value) {
            postTodo(value);
            setNewTodo("");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};
