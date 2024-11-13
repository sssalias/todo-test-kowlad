import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

type Props = {
    children: React.ReactNode  
}
const Layout: React.FC<Props> = props => {
    return (
        <div className='w-screen flex flex-col items-center'>
            <header className='h-[120px] w-3/4 flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <div className='h-[64px] w-[64px]'>
                        <img className='w-full h-full object-cover' src={logo} alt="((" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl'>TODO.LIST</h1>
                        <span>Powerd by Kowlad!</span>
                    </div>
                </div>
                <nav>
                    <Link to='/todo'>TODO</Link>
                </nav>
            </header>
            <main className='w-3/4'>
                {props.children}
            </main>
        </div>
    )
}
export default Layout