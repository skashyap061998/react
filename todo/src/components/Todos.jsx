import React, { useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";


export const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  const[page,setPage] = React.useState(1)

  const onAdd = (data) => {
    setTodos([...todos, data]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  };

  const onEdit = (updatedTodo) => {
    const newTodos = todos.map((todo) => {
    if(todo.id === updatedTodo.id) return updatedTodo;
    else return todo;
  });
    setTodos(newTodos)
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let responce = await fetch(`http://localhost:3000/todos?_page=${page}`);
        let data = await responce.json();
        console.log(data);
        setTodos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [ page]);

  return (
    <div>
      Todos
      <AddTodo onAdd={onAdd} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
      ))}
      <div>
        <button onClick={()=>{
          if(page>1) {
            setPage(page-1)
          }
        }}>Perv</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
};
