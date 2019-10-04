/* eslint-disable */
import React from 'react';

// JSX
{
  const name = 'Nick';
  const element = <div className="element">I am {name}</div>;
}

// Transpiled JSX
{
  const name = 'Nick';
  const element = React.createElement(
    'div',
    { className: 'element' },
    'I am ',
    name,
  );
}

// Element Plain Object
{
  const plainObject = {
    type: 'div',
    props: {
      className: 'element',
      children: 'I am Nick',
    },
  };
}

export const ConditionalRendering = () => (
  <div>
    Tuka {true && <span>ima</span>}, tuka {false && <span>nema</span>}!
  </div>
);
