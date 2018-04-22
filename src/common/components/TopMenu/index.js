import React from 'react';
import { Link } from 'react-router-dom';

// top menu - just for navigation in the demo
const TopMenu = props => (
  <ul>
    {props.routes.map((r, i) => (
      <li key={`tp_${i}`}>
        <Link to={r.path}>{r.path.substr(1).toUpperCase()}</Link>
      </li>
    ))}
  </ul>
);

export default TopMenu;
