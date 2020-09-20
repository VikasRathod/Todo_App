// This component is used to render list of todo's added

import React from 'react';
import Todo from './Todo';
import './TodoList.css';
import Footer from './Footer';


const TodoList = ({ todos }) => {
  return (
    <div className="card">
      {todos && todos.length ? todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
      }).reverse()
        : "No data found."
      }
      <Footer />
    </div>
  )
};


export default TodoList;