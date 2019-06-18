import React from 'react';
import './default.scss';

function DefaultLayout(props) {
  return (
    <div className="default">
      <header className="header">
        <span>Gissues</span>
        <span>Github Issue Management</span>
      </header>
      <div className="content grid">
        { props.children }
      </div>
    </div>
  );
}

export default DefaultLayout;
