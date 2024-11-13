import { Configuration, TasksApi } from '../gen'

export const apiConfig = new Configuration({
    basePath: 'http://api.kowlad.ru/todo-api/v1',
})


export const taskApiClient = new TasksApi(apiConfig)