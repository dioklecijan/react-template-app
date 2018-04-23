// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';
import { configureRoutes } from '../../common/routes';
import { TopMenu } from '../../common/components';

// Configuration for subroutes routes
// Nested configuration or configureRoutes is not supported.
// At this moment, it look to me too "static" and complexity without extra value
const config = [
  {
    loader: () => import('./One'),
    path: '/pagewithsubroutes/one',
    title: 'One',
  },
  {
    loader: () => import('./Two'),
    path: '/pagewithsubroutes/two',
    title: 'Two',
  },
];

const routes = configureRoutes(config);

function PageWithSubroutes(props: { title: string }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <TopMenu routes={routes} />
      <hr />
      <div>{routes.map((r, i) => <Route key={`r_${i}`} {...r} />)}</div>
    </div>
  );
}

export default PageWithSubroutes;
