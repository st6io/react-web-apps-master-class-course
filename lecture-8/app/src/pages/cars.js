import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Button } from 'rebass';
import { Tiles } from '@rebass/layout';

import { CarPreview, Loading } from '../components';
import { CAR_FRAGMENT } from './car';

const ALL_CARS_QUERY = gql`
  query AllCarsQuery($take: Int, $after: String) {
    allCars(take: $take, after: $after) {
      hasMore
      cursor
      cars {
        ...CarWithoutComments
      }
    }
  }
  ${CAR_FRAGMENT}
`;

const Cars = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_CARS_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error on getting all cars</p>;

  const {
    allCars: { cars, hasMore, cursor },
  } = data;

  const loadMoreCars = () => {
    fetchMore({
      variables: {
        after: cursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allCars } }) => {
        if (!allCars.cars.length) {
          return prev;
        }

        return {
          allCars: {
            ...allCars,
            cars: [...prev.allCars.cars, ...allCars.cars],
          },
        };
      },
    });
  };

  return (
    <Box>
      <Box textAlign="center" my={3}>
        <Heading>Cars</Heading>
      </Box>

      <Tiles columns={[1, 2, 3]}>
        {cars.map(car => (
          <Link
            as={RouterLink}
            variant="nav"
            key={car.id}
            to={`/cars/${car.id}`}
          >
            <CarPreview key={car.id} width={300} height={240} {...car} />
          </Link>
        ))}
      </Tiles>
      {hasMore && (
        <Box m={3} textAlign="center">
          <Button onClick={loadMoreCars}>Load More</Button>
        </Box>
      )}
    </Box>
  );
};

export default Cars;
