// @flow
import * as React from 'react';

type P = {
  color: string,
  onClick: (color: string) => mixed,
};

function Color(props: P) {
  console.log(props);
  return (
    <div>
      <h1>I am {props.color}.</h1>
      <button onClick={() => props.onClick(props.color)}>
        Set {props.color}
      </button>
    </div>
  );
}

export default Color;
