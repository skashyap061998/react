import React, { useState } from 'react'

export const AddTodo = ({onAdd}) => {
    const [newTodo, setNewTodo] = useState("")

    return (
        <div>
            <input type="text" placeholder={"Add todo"} onChange={(e)=> setNewTodo(e.target.value)} value={newTodo}/>
        <button onClick={()=>{
            let value = newTodo.trim();
            if(value)
            {
                onAdd(value);
                setNewTodo("");
            }
        }}>ADD</button>

        </div>

    )
}
