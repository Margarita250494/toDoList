import { ToDoCard } from "./ToDoCard";
import PropTypes from "prop-types";

export const ToDoList = (props) => {
  const { todos, handleEditToDo, handleDeleteToDo, handleCheck } = props;

  if (!Array.isArray(todos)) {
    console.error("Invalid todos prop:", todos);
    return null; 
  }
  return (
    <ul className="main">
      <h4>Tasks to do</h4>
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard
            {...props}
            key={todoIndex}
            index={todoIndex}
            handleEditToDo={handleEditToDo}
            handleDeleteToDo={handleDeleteToDo}
            handleCheck={handleCheck}
          >
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
};

ToDoList.propTypes = {
todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEditToDo: PropTypes.func.isRequired,
  handleDeleteToDo: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};
