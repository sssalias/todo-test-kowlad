import { useTodoStore } from '../../store/todo-state/todo-state'
import { TodoListItem } from '../todo-list-item'


const TodoList: React.FC = () => {

    const {todos} = useTodoStore()

    return (
        <div className='flex flex-col gap-4'>
            {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
        </div>
    )
}
export default TodoList