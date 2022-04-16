import React from 'react'

export const Todo = ({todo}) => {
    return (
        <div style={{
            textDecoration:todo.completed ? "line-through":"none",
        }}>{todo.value}</div>

    )
}
