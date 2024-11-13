import { useState } from 'react'
import { CreateTodo } from '../../api/gen'
import { createTodo } from '../../store/todo-state/createTodo'

const CreateForm: React.FC = () => {
    const [todo, setNewTodo] = useState<CreateTodo>({
        title: '',
        description: ''
    })

    return (
        <form
            className='flex flex-col gap-4 w-full py-4'
            onSubmit={e => e.preventDefault()}
        >
            <input onChange={e => setNewTodo({...todo, title: e.target.value})} className='p-3 border-2 border-red-100 rounded-md' placeholder='Task title' type="text" />
            <input onChange={e => setNewTodo({...todo, description: e.target.value})}className='p-3 border-2 border-red-100 rounded-md' placeholder='Task description' type="text" />
            <button onClick={() => createTodo(todo)} className='p-3 border-2 border-red-100 bg-red-100 rounded-md text-white font-semibold transition-all hover:bg-transparent hover:text-red-100 '>Create task!</button>
        </form>
    )
}
export default CreateForm