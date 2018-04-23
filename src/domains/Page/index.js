// @flow
import * as React from 'react';

/**
 * Demonstrates passing down custom properties via Route component,
 * See routes[0] in ../config.js and
 * `configureRoutes` in ../common/components/routes/configureRoutes.js
 *
 */
function Page(props: { myCustomProp: number, title: string }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Demonstrates passing down custom properties via Route component.</p>
      <pre>myCustomProp: {props.myCustomProp}</pre>
      <pre>title: {props.title}</pre>
    </div>
  );
}

export default Page;
