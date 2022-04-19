import React, { useState } from "react";
import styles from "./todo.module.css";

export const Todo = ({ todo, onDelete , onEdit}) => {
const [isEdit,setIsEdit] = useState(false);
const [value,setValue] = useState(todo.value)

  const deletTodo = async () => {
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    onDelete(todo.id);
  };

  const editTodo = async () => {
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body:JSON.stringify({
        value,
        completed:true
      })
    });
    let data = await res.json();
    onEdit(data);
  };
  return (
    <div className={`${styles.grid} ${todo.completed ? "line-through" : ""}`}>
      {isEdit ? (   
         <div>
      <input
        type="text"
        placeholder={"Add todo"}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          let v = value.trim();
          if (v) {
            editTodo(v);
            setIsEdit(false);
          }
        }}
      >
        Update
      </button>
    </div>):(<div>{todo.value}</div>)}
      
      <div>
        <button onClick={()=> setIsEdit(!isEdit)}>Edit</button>
        <button onClick={deletTodo}>Delete</button>
      </div>
    </div>
  );
};
