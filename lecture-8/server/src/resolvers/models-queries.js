import { PubSub, withFilter } from 'apollo-server';
import { combineResolvers } from 'graphql-resolvers';
import { sortBy, filter, find, findIndex, last, get } from 'lodash';

import auth from './authorization';

const withAuth = resolver => combineResolvers(auth.isAuthenticated, resolver);

const COMMENT_ADDED = 'COMMENT_ADDED';
const pubSub = new PubSub();

const sortItems = items =>
  sortBy(items, ({ id }) => {
    return +id.split('.')[1];
  });

export default {
  Subscription: {
    commentAdded: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([COMMENT_ADDED]),
        ({ commentAdded: { car } }, variables) => car === variables.carId,
      ),
    },
  },
  Query: {
    allCars: withAuth((parent, { take = 4, after }, { models }) => {
      if (take < 2) {
        throw new Error(
          `Invalid number for take: ${take}. Should be at least 2!`,
        );
      }

      const sortedCars = sortItems(models.cars);
      const index = findIndex(sortedCars, { id: after }) + 1;
      const cars = sortedCars.splice(index, take);

      return {
        cars,
        cursor: get(last(cars), 'id'),
        hasMore: index + take < models.cars.length,
      };
    }),
    car: withAuth((parent, { id }, { models }) => {
      return find(models.cars, { id });
    }),
  },

  Car: {
    comments: withAuth((parent, args, { models }) => {
      const comments = filter(models.comments, { car: parent.id });
      return sortItems(comments).reverse();
    }),
  },
  Mutation: {
    comment: withAuth(async (parent, { carId, comment }, { models, me }) => {
      const id = `comment.${models.comments.length + 1}`;
      const newComment = {
        id,
        comment,
        car: carId,
        user: me.email,
      };

      pubSub.publish(COMMENT_ADDED, { commentAdded: newComment });
      // eslint-disable-next-line
      models.comments = [...models.comments, newComment];
      return newComment;
    }),
  },
};
