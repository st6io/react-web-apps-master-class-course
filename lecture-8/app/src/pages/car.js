import React, { useCallback } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { useParams } from 'react-router-dom';
import { Box } from 'rebass';

import { CarPreview, Comments, Loading } from '../components';

export const CAR_FRAGMENT = gql`
  fragment CarWithoutComments on Car {
    id
    maker
    model
    image
    liked @client
  }
`;

const CAR_QUERY = gql`
  query CarQuery($carId: ID!) {
    car(id: $carId) {
      ...CarWithoutComments
      comments {
        id
        user
        comment
      }
    }
  }
  ${CAR_FRAGMENT}
`;

const ADD_COMMENT = gql`
  mutation AddComment($carId: ID!, $comment: String!) {
    comment(carId: $carId, comment: $comment) {
      id
      user
      comment
    }
  }
`;

const ADD_COMMENT_SUBSCRIPTION = gql`
  subscription OnCommentAdded($carId: ID!) {
    commentAdded(carId: $carId) {
      id
      user
      comment
    }
  }
`;

const Car = () => {
  const { carId } = useParams();
  const { data, loading, error, refetch } = useQuery(CAR_QUERY, {
    variables: { carId },
    update: (proxy, { data: { comment } }) => {
      const data = proxy.readQuery({
        query: CAR_QUERY,
        variables: { carId },
      });

      proxy.writeQuery({
        query: CAR_QUERY,
        variables: { carId },
        data: {
          ...data,
          car: {
            ...data.car,
            comments: [comment, ...data.car.comments],
          },
        },
      });
    },
  });

  const [addComment] = useMutation(ADD_COMMENT);
  useSubscription(ADD_COMMENT_SUBSCRIPTION, {
    variables: { carId },
    onSubscriptionData: () => {
      refetch({ carId });
    },
  });

  const handleComment = useCallback(
    text => {
      addComment({
        variables: { carId, comment: text },
        optimisticResponse: {
          optimistic: true,
          __typename: 'Mutation',
          comment: {
            __typename: 'Comment',
            id: 'temp',
            user: 'waiting for...',
            comment: text,
          },
        },
      });
    },
    [carId, addComment],
  );

  if (loading) return <Loading />;
  if (error) return <p>Error on getting car with id: {carId}</p>;

  const { comments, ...car } = data.car;
  return (
    <Box width={[400, 600]} mx="auto">
      <CarPreview {...car} my={2} />
      <Comments comments={comments} onComment={handleComment} py={2} />
    </Box>
  );
};

export default Car;
