import React from "react"

export const Todo = ()=>{
const [task,setTask] = React.useState("")
const [todo,setTodo]= React.useState([])

const handleChange=(e)=>{
    // console.log(e.target.value)
    setTask(e.target.value)

}
const handleClick = ()=>{
setTodo([...todo,task])
}
return(
    <>
    <h1>Todo</h1>
    <input type="text" placeholder="enter todo name" value={task} onChange={handleChange}/>
    <button onClick={handleClick}>add</button>
    {/* now we do mapping */}
    {todo.map((item)=>{
return <h1>{item}</h1>

    })}
    </>
)
}