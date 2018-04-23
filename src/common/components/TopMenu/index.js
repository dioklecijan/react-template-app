// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Route = {
  path: string,
  title: ?string,
};

type P = {
  routes: Array<Route>,
};
/**
 * List of links. Component expects routes props with path and title.
 * @param {} props
 */
const TopMenu = (props: P) => (
  <ul>
    {props.routes.map((r, i) => (
      <li key={`tp_${i}`}>
        <Link to={r.path}>{r.title || r.path}</Link>
      </li>
    ))}
  </ul>
);

export default TopMenu;
