import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import { Todo } from '../../api/gen'


interface TodoActions {
    setTodo: (todos: Todo[]) => void
}

interface TodoState {
    todos: Todo[]
}

export const useTodoStore = create<TodoActions & TodoState>()(immer(set => ({
    todos: [],
    setTodo: (todos) => {
        set({todos})
    }
})))