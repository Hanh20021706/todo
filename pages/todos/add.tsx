import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TodoType } from '../../type/typetodo'


type IputType = {
    id? : string,
    name : string
}

const TodoList = () => {

    const {register, handleSubmit} = useForm<IputType>()

    const route = useRouter()

    const onSubmit:SubmitHandler<IputType> = async(item) => {
        await axios.post('http://localhost:3001/todos', item)
        route.push("/todos")
    }

    return (
        <div>

            <h2>
                add todo
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label htmlFor=""> name</label>
                    <input {...register("name")} type="text" />
                </div>

                <button>
                    submit
                </button>
            </form>
        </div>
    )
}

export default TodoList