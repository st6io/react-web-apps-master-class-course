import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { find } from 'lodash';

const createToken = (user, secret, expiresIn) => {
  const { id, email, role } = user;
  return jwt.sign({ id, email, role }, secret, {
    expiresIn,
  });
};

export default {
  Query: {
    me: (parent, args, { models, me }) => {
      if (!me) {
        return null;
      }

      return find(models.users, { id: me.id });
    },
  },

  Mutation: {
    logIn: async (parent, { email }, { models, secret }) => {
      const user = find(models.users, { email });

      if (!user) {
        throw new AuthenticationError('Invalid credentials!');
      }

      return createToken(user, secret, '3h');
    },
  },
};
