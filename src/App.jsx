import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";
import { DoneList } from "./components/DoneList";
import { useTodoState } from "./hooks/useTodoState.js";

export const App = () => {
  const {
    state,
    handleAddTodos,
    handleDeleteToDo,
    handleEditToDo,
    handleCheck,
    updateState,
  } = useTodoState();

  return (
    <>
      <div className="main_card">
        <ToDoInput
          todoValue={state.todoValue}
          setTodoValue={(value) => updateState({ todoValue: value })}
          handleAddTodos={handleAddTodos}
        />
        <ToDoList
          handleEditToDo={handleEditToDo}
          handleDeleteToDo={handleDeleteToDo}
          handleCheck={handleCheck}
          todos={state.todos}
        />
        <DoneList done={state.done} />
      </div>
    </>
  );
};
