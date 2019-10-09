import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { flatMap } from 'lodash';

import { groupPropType } from '../propTypes';

const Routes = ({ pages }) => (
  <div>
    {flatMap(pages, ({ items }) =>
      items.map(({ path, component }) => (
        <Route
          path={path}
          key={path}
          component={component}
        />
      )),
    )}
  </div>
);

Routes.propTypes = {
  pages: PropTypes.arrayOf(groupPropType).isRequired,
};

export default Routes;
