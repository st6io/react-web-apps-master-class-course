import { WebSocketLink } from 'apollo-link-ws';

const subscriptionLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_SUBSCRIPTIONS,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem('token') || '',
    },
  },
});

subscriptionLink.subscriptionClient.maxConnectTimeGenerator.duration = () =>
  subscriptionLink.subscriptionClient.maxConnectTimeGenerator.max;

export default subscriptionLink;
