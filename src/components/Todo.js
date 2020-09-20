// This component renders single todo itme along with complete and delete Todo option

import React from 'react';
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from '../actions';
import './Todo.css';
import Trash from '../images/trash.png';
import Correct from '../images/correct.png'

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="cards">
      <div className="TodoCard">
        <span className="textStyle">{todo.text}</span>
        <div>
          {todo.completed ? null : <input type="image" src={Correct} className="TodoBtns" alt="deleteTodo" onClick={() => toggleTodo(todo.id)} />}
          <input type="image" src={Trash} className="TodoBtns" alt="deleteTodo" onClick={() => deleteTodo(todo.id)} />
        </div>
      </div>
    </div>
  )
};

export default connect(
  null,
  { deleteTodo, toggleTodo }
)(Todo);
