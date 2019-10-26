import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

import { typeDefs, resolvers } from './local';
import subscriptionLink from './subscription';
import authLink from './auth';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    subscriptionLink,
    authLink.concat(httpLink),
  ),
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
