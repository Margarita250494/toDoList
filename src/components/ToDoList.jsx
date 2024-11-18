import { ToDoCard } from "./ToDoCard";
import PropTypes from "prop-types";


export const ToDoList = ({todos}) => {
    //const {todos} = props;
    return (
        <ul className="main">
            {todos.map((todo,todoIndex) => {
                return(
                    <ToDoCard key={todoIndex}>
                        <p>{todo}</p>
                    </ToDoCard>
                )
            })}
        </ul>
    );
};

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired, // todos must be an array of strings
  };
