import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home-page'
import { TodoPage } from './pages/todo-page'

interface IRoute {
    path: string
    page: React.ReactNode
}

const RouterData: IRoute[] = [
    {
        path: '/',
        page: <HomePage/>
    },
    {
        path: '/todo',
        page: <TodoPage/>
    },
]

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {RouterData.map(el => <Route key={el.path} path={el.path} element={el.page}/>)}
        </Routes>
    )
}
export default AppRouter