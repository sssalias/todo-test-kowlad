import { Configuration, TasksApi } from '../gen'

export const apiConfig = new Configuration({
    basePath: 'https://api.goida.dev/todo-api/v1',
})


export const taskApiClient = new TasksApi(apiConfig)