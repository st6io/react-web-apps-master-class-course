import React from 'react';

const style = { border: '1px solid red' };
const Box = props => <span style={style} {...props} />;

export const ShowChildren = () => (
  <Box>
    <span>Greetings</span>
  </Box>
);

const LeftRightContainer = ({ left, right }) => (
  <>
    <Box>{left}</Box>
    <Box>{right}</Box>
  </>
);

export const ShowMultiple = () => (
  <LeftRightContainer left={<span>Hello, </span>} right={<span>world!</span>} />
);
