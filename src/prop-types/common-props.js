import PropTypes from 'prop-types'

export const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
])

export const routerPropTypes = PropTypes.shape({
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
})
