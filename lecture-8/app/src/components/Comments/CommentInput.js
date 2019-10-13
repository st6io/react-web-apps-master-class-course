import React, { useState, useCallback } from 'react';
import { Box, Button } from 'rebass';
import { Textarea } from '@rebass/forms';

const CommentInput = ({ onComment, ...props }) => {
  const [text, setText] = useState('');

  const handleTextChange = useCallback(({ target: { value } }) => {
    setText(value);
  }, []);

  const handleComment = useCallback(() => {
    setText('');
    onComment(text);
  }, [text, onComment]);

  return (
    <Box {...props}>
      <Box mb={3}>
        <Textarea
          id="commentText"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter Comment..."
        />
      </Box>
      <Box px={2} ml="auto">
        <Button variant="outline" onClick={handleComment}>
          Comment
        </Button>
      </Box>
    </Box>
  );
};

export default CommentInput;
