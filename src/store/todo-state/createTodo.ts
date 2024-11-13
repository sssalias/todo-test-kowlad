import { taskApiClient } from '../../api/clients/config'
import { CreateTodo } from '../../api/gen'
import { useTodoStore } from './todo-state'

export const createTodo = async (todo:CreateTodo) => {
    await taskApiClient.createTodo(todo)
    useTodoStore.getState().setTodo()
}