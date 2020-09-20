// This component depending on value of visibility filter, it renders a specific filtered list(all, active, completed). 

import React from 'react';
import { connect } from 'react-redux';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = ({ todos }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px", fontSize: "18px" }}>
      <div>
        <span>ALL({todos.length}) </span>
      </div>

      <div>
        <span style={{ marginRight: "15px" }}>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        </span>
        <span style={{ marginRight: "15px" }}>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
        </span>
        <span style={{ marginRight: "15px" }}>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
        </span>
      </div>
    </div >
  )
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps, null
)(Footer);
