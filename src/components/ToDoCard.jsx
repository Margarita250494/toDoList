import { Delete } from "./UI_components/Delete";
import { Check } from "./UI_components/Check";
import { Rewrite } from "./UI_components/Rewrite";
import PropTypes from 'prop-types';

export const ToDoCard = (props) => {
    
    const {children, handleDeleteToDo, index, handleEditToDo, handleCheck} = props
  return (
    <li className="todoItem">
        {children}
      <div className="taskButtons">
        <button onClick={() =>{
          handleEditToDo(index)
        }}><Rewrite /></button>
        <button onClick={() => {
          handleCheck(index)}}><Check /></button>
        <button onClick={() => {
          handleDeleteToDo(index)
        }}><Delete /></button>
      </div>
    </li>
  );
};

ToDoCard.propTypes = {
    children: PropTypes.node.isRequired,
    handleDeleteToDo: PropTypes.func.isRequired,
    index: PropTypes.number,
    handleEditToDo: PropTypes.func.isRequired,
    handleCheck: PropTypes.func.isRequired, // children must be a React node
};
