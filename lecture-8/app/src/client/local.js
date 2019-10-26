import { loader } from 'graphql.macro';
import { CAR_FRAGMENT } from '../pages/car';

export const typeDefs = loader('./local-schema.gql');

const getCarId = (id, getCacheKey) =>
  getCacheKey({
    __typename: 'Car',
    id,
  });

export const resolvers = {
  Car: {
    liked: (car, _, { cache, getCacheKey }) => {
      const id = getCarId(car.id, getCacheKey);

      const carFragment =
        cache.readFragment({
          fragment: CAR_FRAGMENT,
          id,
        }) || {};

      return !!carFragment.liked;
    },
  },
  Mutation: {
    likeCar: (_, { carId }, { cache, getCacheKey }) => {
      const id = getCarId(carId, getCacheKey);
      const carFragment =
        cache.readFragment({
          fragment: CAR_FRAGMENT,
          id,
        }) || {};

      const data = {
        ...carFragment,
        liked: !carFragment.liked,
      };

      cache.writeFragment({
        fragment: CAR_FRAGMENT,
        id,
        data,
      });
    },
  },
};
