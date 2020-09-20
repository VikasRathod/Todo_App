// Main entry component

import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Todos</h1>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;