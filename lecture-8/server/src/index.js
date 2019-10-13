import 'dotenv/config';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import express from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const app = express();
app.use(cors());
app.use(morgan('dev'));

const getUser = async token => {
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }

  return null;
};

const getRequestUser = req => getUser(req.headers.authorization);

const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
  subscriptions: {
    onConnect: async ({ authToken }) => {
      const me = await getUser(authToken);
      if (!me) {
        throw new AuthenticationError(
          'Unauthorized Connection! Missing auth token!',
        );
      }
    },
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context;
    }

    if (req) {
      const me = await getRequestUser(req);
      return {
        models,
        me,
        secret: process.env.SECRET,
      };
    }

    return {};
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 8000;
httpServer.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server listening ${port}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ${port}${server.subscriptionsPath}`);
});
