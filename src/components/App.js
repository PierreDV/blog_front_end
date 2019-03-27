import React from 'react';
import Header from 'containers/Header';

export default ({ children }) => {
  return (
    <div>
      <Header />
      <hr/>
      { children }
    </div>
  );
};

