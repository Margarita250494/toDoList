import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"

const App = () => {
  let todos = [
    "Go to the Gym",
    "Eat more fruits and vege",
]
  
  return(
    <>
      <ToDoInput />
      <ToDoList todos={todos} />
    </>
  )
}

export {App}
