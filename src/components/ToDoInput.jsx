import { Add } from './UI_components/Add'


export  const ToDoInput = () => {
    return(
        <header>
            <input type="text" placeholder='Add a new task' />
            <button><Add /></button>
        </header>
    )
}

