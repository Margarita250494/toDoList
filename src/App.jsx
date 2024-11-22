import { useState, useEffect } from "react";
import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";
import { DoneList } from "./components/DoneList";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [done, setDone] = useState([]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify(newList)); // Save as array
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
    persistData(updatedTodos); // Update storage after modification
    setTodos(updatedTodos);
    setDone((prevDone) => [...prevDone, taskToBeDone]); // Add to done list
  }

  useEffect(() => {
    try {
      const localTodos = localStorage.getItem("todos");
      if (localTodos) {
        const parsedTodos = JSON.parse(localTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos); // Only set if it's an array
        } else {
          console.warn("Clearing invalid todos from localStorage");
          localStorage.removeItem("todos"); // Clear invalid data
        }
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      localStorage.removeItem("todos");
    }
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


