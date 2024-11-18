import { Delete } from "./UI_components/Delete";
import { Check } from "./UI_components/Check";
import { Rewrite } from "./UI_components/Rewrite";
import PropTypes from 'prop-types';

export const ToDoCard = (props) => {
    
    const {children} = props
  return (
    <li className="todoItem">
        {children}
      <div className="taskButtons">
        <Rewrite />
        <Check />
        <Delete />
      </div>
    </li>
  );
};

ToDoCard.propTypes = {
    children: PropTypes.node.isRequired, // children must be a React node
};
