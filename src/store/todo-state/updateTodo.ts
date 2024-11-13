import { taskApiClient } from '../../api/clients/config'
import { UpdateTodo } from '../../api/gen'
import { useTodoStore } from './todo-state'

export const updateTodo = async (id:string | undefined, todo: UpdateTodo) => {
    await taskApiClient.updateTodo(id ?? '', todo)
    useTodoStore.getState().setTodo()
}