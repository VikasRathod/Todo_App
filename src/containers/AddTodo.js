// This component allows user to input a todo item 

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import './AddTodo.css';
import send from '../images/send.png'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={ e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        <input type="text" placeholder="Add new task" ref={el => (input = el)} />
        <input type="image" className="submit_btn" name="submit" src={send} alt="Submit" />
      </form>
    </div>
  );
}

export default connect()(AddTodo);