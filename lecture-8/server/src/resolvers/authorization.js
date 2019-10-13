import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

export default {
  isAuthenticated: (parent, args, { me }) =>
    me ? skip : new ForbiddenError('Not authenticated as user.'),
};
