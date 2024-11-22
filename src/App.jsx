import { useState, useEffect } from "react";
import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";
import { DoneList } from "./components/DoneList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [done, setDone] = useState([]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteToDo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditToDo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  function handleCheck(index) {
    const taskToBeDone = todos[index];
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
    setDone((prevDone) => [...prevDone, taskToBeDone]); // Add to done list
  }

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <div className="main_card">
        <ToDoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodos={handleAddTodos}
        />
        <ToDoList
          handleEditToDo={handleEditToDo}
          handleDeleteToDo={handleDeleteToDo}
          handleCheck={handleCheck}
          todos={todos}
        />
        <DoneList done={done} />
      </div>
    </>
  );
};

export { App };
