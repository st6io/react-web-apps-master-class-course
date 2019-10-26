import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { Box } from 'rebass';

import Pages from './pages';
import Login from './Login';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = () => {
  const { data } = useQuery(AUTHENTICATED_QUERY);
  return (
    <Box width={[400, 600, 1000]} mx="auto">
      {data.authenticated ? <Pages /> : <Login />}
    </Box>
  );
};

export default Home;
