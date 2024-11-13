import { taskApiClient } from '../../api/clients/config'
import { useTodoStore } from './todo-state'

export const deleteTodo = async (id:string | undefined) => {
    await taskApiClient.deleteTodo(id ? id: '')
    useTodoStore.getState().setTodo()
}