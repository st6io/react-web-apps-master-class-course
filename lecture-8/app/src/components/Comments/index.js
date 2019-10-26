import React from 'react';
import { Flex, Box, Card, Heading } from 'rebass';

import Comment from './Comment';
import CommentInput from './CommentInput';

const Comments = ({ comments, onComment, ...props }) => {
  return (
    <Flex flexDirection="column" {...props}>
      <Card mb={3}>
        <CommentInput onComment={onComment} p={2} />
      </Card>

      <Card>
        <Box p={2}>
          <Heading>Comments</Heading>
          {comments.map(({ id, ...comment }) => (
            <Comment key={id} {...comment} />
          ))}
        </Box>
      </Card>
    </Flex>
  );
};

export default Comments;
