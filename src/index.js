import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';

const initialState = {
  auth: { authenticated: localStorage.getItem('token') }
}

ReactDOM.render(
  <Root initialState={initialState} />,
  document.getElementById('root')
);