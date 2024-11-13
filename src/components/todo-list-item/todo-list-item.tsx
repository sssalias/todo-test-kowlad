import { MdDelete } from 'react-icons/md'
import { Todo } from '../../api/gen'
import { deleteTodo } from '../../store/todo-state/deleteTodo'
import { updateTodo } from '../../store/todo-state/updateTodo'
import React from "react";

type Props = {
    todo: Todo
}
const TodoListItem: React.FC<Props> = props => {
    return (
        <div className='flex items-center justify-between p-5 shadow-md rounded-xl'>
            <div className='flex gap-3'>
                <input onChange={() => updateTodo(props.todo.id, {...props.todo, status: props.todo.status === 'completed' ? 'pending' : 'completed' })} className='cursor-pointer' type='checkbox' defaultChecked={props.todo.status === 'completed' ? true : false} />
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold'>{props.todo.title}</h2>
                    <span>{props.todo.description}</span> 
                </div>
            </div>
            <button onClick={() => deleteTodo(props.todo.id)} className='p-2 bg-red-400 rounded-md text-white'><MdDelete/></button>
        </div>
    )
}
export default TodoListItem