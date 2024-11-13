import { taskApiClient } from '../../api/clients/config'

export const getTodos = async () => {
    return await taskApiClient.getTodos('completed') 
}