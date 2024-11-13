import React, { useEffect } from 'react'
import { CreateForm } from '../../components/create-form'
import { TodoList } from '../../components/todo-list'
import { Layout } from '../layout'
import { useTodoStore } from '../../store/todo-state/todo-state'

const TodoPage: React.FC = () => {

    const {setTodo} = useTodoStore()

    useEffect(() => {
        setTodo()
    }, [setTodo])

    return (
        <Layout>
            <CreateForm/>
            <TodoList/>
        </Layout>
    )
}
export default TodoPage