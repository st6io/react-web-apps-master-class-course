import React, { useCallback } from 'react';
import { Card, Image, Heading, Flex } from 'rebass';

import Heart from './Heart';
import { Box } from 'reflexbox';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

const TOGGLE_CAR_LIKE = gql`
  mutation ToggleCarLike($id: ID!) {
    likeCar(carId: $id) @client
  }
`;

const CarPreview = ({ id, maker, model, image, liked, ...props }) => {
  const [toggleCarLike] = useMutation(TOGGLE_CAR_LIKE);

  const handleLikeClick = useCallback(
    e => {
      e.preventDefault();
      toggleCarLike({ variables: { id } });
    },
    [id, toggleCarLike],
  );

  return (
    <Card {...props}>
      <Flex flexDirection="column" height="100%">
        <Box textAlign="right" mb={2}>
          <Heart filled={!!liked} onClick={handleLikeClick} />
        </Box>

        <Flex
          flexDirection="column"
          justifyContent="space-between"
          flexGrow="1"
        >
          <Image src={image} />

          <Flex justifyContent="space-evenly" pt={2}>
            <Heading as="h2" fontSize="1.5em" color="primary">
              {maker}
            </Heading>
            <Heading as="h3" fontSize="1.5em" color="text">
              {model}
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CarPreview;
