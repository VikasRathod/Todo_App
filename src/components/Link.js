// UI component for displaying ALL, ACTIVE and COMPLETED buttons on our screen

import React from 'react';

const Link = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
      border: 'none',
      backgroundColor: '#e2e2e2',
      fontSize: '0.875rem',
      fontWeight: '550',
      lineHeight: '1.75',
      outline: 'none',
    }}
  >
    {children}
  </button>
);

export default Link;
