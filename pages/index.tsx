import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import TodoList from '../components/todoList'
import styles from '../styles/Home.module.css'
import { TodoType } from '../type/typetodo'

const Home: NextPage = (): JSX.Element => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [newTodo, setNewTodo] = useState<TodoType>({ id: undefined, name: '' })


    const changeName = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTodo({
            ...newTodo,
            name: event.target.value
        })
        
    }

    const createTodo = () => {
        console.log(todos)
      const id = Math.random(...todos.map(item => item.id)) 
      setTodos([...todos,{id, name:newTodo.name}])
        // setTodos([...todos, {

        //     id: Math.random(),
        //     name: newTodo
        // }])

        // if (checkUpdate == true) {
        //     console.log(editNow)
        //     setTodos(todos.map((item) => item.id == editNow.id ? { id: editNow.id, name: newTodo } : item))
        // }
        // console.log(editNow)
        // setNewTodo('')
    }
    console.log(todos)


    // delete
    // const removeItem = (index: number) => () => {
    //     setTodos(todos.filter((item) => item.id != index))

    //     console.log(index)



    // }

    // remove 
    const removeItem = (id :any) => {
        setTodos(todos.filter(item => item.id !== id))
    }


    const uppdateItem = (id: number) => {
        const newUpdate = todos.find((item) => item.id == id)

        if (!newUpdate) return;

        console.log(newUpdate)
        console.log(id)
        // setNewTodo(newUpdate.name)
        // setEditNow({ id: id, name: newUpdate.name })
        // setCheckUpdate(true)

    }

    // const updateItem = (event:any) => {
    //     const newItems = todos.map(item => {
    //       if (event.target.id == item.id) {
    //         return { ...item, name: event.target.value}
    //       }
    //       return item;
    //     });
    //     setTodos(newItems);
    //   }


    return (
        <>
            <div className='container box__todo'>
                <h2 className='title__todo'>
                    Todo List
                </h2>
                <div className='box__form'>


                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onChange={changeName} type="text" name='todos' value={newTodo.name} className="form-control" />
                    </div>


                    <button onClick={createTodo} className="btn btn-primary">Submit</button>
                </div>
                <div className='table__todo'>


                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Stt</th>
                                <th scope="col">Name Todo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((item: TodoType, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button className="btn btn-warning btn__edit" onClick={() => setNewTodo(item)}>
                                            edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home