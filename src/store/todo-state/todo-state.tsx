import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import { Todo } from '../../api/gen'
import { getTodos } from './getTodos'


interface TodoActions {
    setTodo: () => void
}

interface TodoState {
    todos: Todo[]
}

export const useTodoStore = create<TodoActions & TodoState>()(immer(set => ({
    todos: [],
    setTodo: async () => {
        const {data} = await getTodos()
        console.log(data)
        set({todos: data})
    }
})))