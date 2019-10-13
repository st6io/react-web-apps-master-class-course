import React from 'react';
import { Card, Heading, Text } from 'rebass';

const CommentInput = ({ user, comment }) => {
  return (
    <Card my={3} bg="highlight">
      <Heading fontSize="1em" mb={2}>
        {user}
      </Heading>
      <Text>{comment}</Text>
    </Card>
  );
};

export default CommentInput;
