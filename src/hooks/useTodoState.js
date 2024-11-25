import { useState, useEffect } from "react";

export const useTodoState = () => {
  const [state, setState] = useState({ todos: [], done: [], todoValue: "" });

  function updateState(updatedPart) {
    setState((prevState) => ({
      ...prevState,
      ...updatedPart,
    }));
  }

  function persistData(newTodos = state.todos, newDone = state.done) {
    try {
      localStorage.setItem("todos", JSON.stringify(newTodos));
      localStorage.setItem("done", JSON.stringify(newDone));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }

  useEffect(() => {
    try {
      const localTodos = localStorage.getItem("todos");
      const localDone = localStorage.getItem("done");
      const parsedTodos = localTodos ? JSON.parse(localTodos) : [];
      const parsedDone = localDone ? JSON.parse(localDone) : [];
      updateState({ todos: parsedTodos, done: parsedDone });
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      localStorage.removeItem("todos");
      localStorage.removeItem("done");
    }
  }, []);

  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) return;
    const newTodoList = [...state.todos, newTodo];
    if (state.todos.includes(newTodo)) {
      alert("Task already exists.");
      return;
    }
    updateState({ todos: newTodoList });
    persistData(newTodoList);
  }

  function removeTask(tasks, index) {
    return tasks.filter((_, i) => i !== index);
  }

  function handleDeleteToDo(index) {
    const newTodoList = removeTask(state.todos, index);
    updateState({ todos: newTodoList });
    persistData(newTodoList, state.done);
  }

  function handleEditToDo(index) {
    const valueToBeEdited = state.todos[index];
    updateState({ todos: valueToBeEdited });
    handleDeleteToDo(index);
  }

  function handleCheck(index) {
    const taskToBeDone = state.todos[index];
    const updatedTodos = removeTask(state.todos, index);
    const updatedDone = [...state.done, taskToBeDone];

    updateState({
      todos: updatedTodos,
      done: updatedDone,
    });

    persistData(updatedTodos, updatedDone);
  }

  return {
    state,
    handleAddTodos,
    handleDeleteToDo,
    handleEditToDo,
    handleCheck,
    updateState,
  };
};
