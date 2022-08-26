import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TodoType } from '../type/typetodo';

interface Props {
    todo: TodoType;
    editTodo: (name: string) => void

}

// const removeItem = (id) => {
//     console.log("id")
// }


const TodoList = ({ todo, editTodo }: Props): JSX.Element => {
    return (<>
        <p> {todo.name} <button >delete</button> <button onClick={() => { editTodo(todo.name) }}>edit</button></p>

    </>)
}



export default TodoList
