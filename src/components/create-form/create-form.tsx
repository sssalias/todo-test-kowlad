const CreateForm: React.FC = () => {
    return (
        <form
            className='flex flex-col gap-4 w-full py-4'
            onSubmit={e => e.preventDefault()}
        >
            <input className='p-3 border-2 border-red-100 rounded-md' placeholder='Task title' type="text" />
            <input className='p-3 border-2 border-red-100 rounded-md' placeholder='Task description' type="text" />
            <button className='p-3 border-2 border-red-100 bg-red-100 rounded-md text-white font-semibold transition-all hover:bg-transparent hover:text-red-100 '>Create task!</button>
        </form>
    )
}
export default CreateForm