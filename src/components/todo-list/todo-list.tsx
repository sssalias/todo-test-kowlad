import { Todo } from '../../api/gen'
import { TodoListItem } from '../todo-list-item'

const todos:Todo[] = [
    {
        title: 'Съесть негра',
        description: 'Негр должен быть чёрным!',
        status: 'pending'
    }
]


const TodoList: React.FC = () => {
    return (
        <div className='flex flex-col gap-4'>
            {todos.map(todo => <TodoListItem todo={todo}/>)}
        </div>
    )
}
export default TodoList