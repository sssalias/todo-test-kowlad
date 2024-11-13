import { CreateForm } from '../../components/create-form'
import { TodoList } from '../../components/todo-list'
import { Layout } from '../layout'

const TodoPage: React.FC = () => {
    return (
        <Layout>
            <CreateForm/>
            <TodoList/>
        </Layout>
    )
}
export default TodoPage