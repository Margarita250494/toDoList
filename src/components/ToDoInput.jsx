import { Add } from "./UI_components/Add";
import PropTypes from "prop-types";

export const ToDoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Add a new task"
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        <Add />
      </button>
    </header>
  );
};

ToDoInput.propTypes = {
  handleAddTodos: PropTypes.func.isRequired,
  todoValue: PropTypes.string.isRequired, // Must be a string
  setTodoValue: PropTypes.func.isRequired,
};
