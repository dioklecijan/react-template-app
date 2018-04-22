import React from 'react';

/**
 * Loading transition component. Do not display if component is loaded inside
 * props.delay (default 200 ms).
 * See https://github.com/jamiebuilds/react-loadable
 */
function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    // 200ms passed
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export default Loading;
