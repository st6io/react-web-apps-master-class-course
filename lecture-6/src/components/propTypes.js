import PropTypes from 'prop-types';

export const itemPropType = PropTypes.shape({
  path: PropTypes.string,
  name: PropTypes.string,
  component: PropTypes.any,
});

export const groupPropType = PropTypes.shape({
  title: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType),
});