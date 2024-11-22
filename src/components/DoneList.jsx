import PropTypes from "prop-types";

export const DoneList = ({ done }) => {
  return (
    <ul className="main_done">
      <h4>Done</h4>
      {done.map((task, index) => (
        <li key={index} className="todoItem todoItemDone">
          <p>{task}</p>
        </li>
      ))}
    </ul>
  );
};
DoneList.propTypes = {
  done: PropTypes.arrayOf(PropTypes.string).isRequired, // done must be an array of strings
};
