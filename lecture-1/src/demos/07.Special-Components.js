import React from 'react';

const style = { border: '1px solid red' };
export const Box = props => <span style={style} {...props} />;

export const BlackBox = () => (
  <Box className="black-box">You can't see me!</Box>
);
